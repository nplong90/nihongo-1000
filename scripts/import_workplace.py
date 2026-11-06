"""Import the two supplied workplace PDF layouts without uploading the PDFs."""
import argparse
import json
import re
from pathlib import Path

import fitz


def rows(spans, size, start=0, stop=810):
    lines = {}
    for span in spans:
        y = round(span["origin"][1], 1)
        if abs(span["size"] - size) < .06 and start <= y < stop:
            lines.setdefault(y, []).append(span)
    return [
        "".join(s["text"] for s in sorted(line, key=lambda s: s["origin"][0])).strip()
        for _, line in sorted(lines.items())
    ]


def extract(path, sentences, expected):
    cards = []
    labels = {}
    section = None
    with fitz.open(path) as document:
        for page in list(document)[1:]:
            spans = [
                s for block in page.get_text("dict")["blocks"]
                for line in block.get("lines", []) for s in line["spans"]
            ]
            for title in rows(spans, 13, stop=60):
                match = re.fullmatch(r"(\d+)\.\s*(.+)", title)
                if match:
                    section = int(match[1])
                    labels[section] = re.sub(r"\s*\(kênh ca-\)", "", match[2])
            for right in (False, True):
                column = [s for s in spans if (s["origin"][0] >= page.rect.width / 2) == right]
                anchors = sorted(
                    (round(s["origin"][1], 1), int(s["text"]))
                    for s in column
                    if s["size"] == 7.5 and s["text"].isdigit()
                    and abs(s["origin"][0] - (311.25 if right else 39.33)) < .1
                )
                for (y, number), (next_y, _) in zip(anchors, anchors[1:] + [(825, 0)]):
                    stop = next_y - 14
                    word = "".join(rows(column, 12.5 if sentences else 15, y - 2, stop))
                    meaning = " ".join(rows(column, 9 if sentences else 9.5, y - .1, stop)).strip()
                    card = dict(id=number, word=word, meaning=meaning, group=section)
                    if sentences:
                        japanese_end = max(s["origin"][1] for s in column
                                           if abs(s["size"] - 12.5) < .06 and y - 2 <= s["origin"][1] < stop)
                        reading_end = japanese_end
                    else:
                        reading_end = y - 13
                        meanings = rows(column, 9.5, y - .1, stop)
                        japanese = next((i for i, line in enumerate(meanings) if re.match(r"[ぁ-ヿ一-龯々]", line)), len(meanings))
                        card["meaning"] = " ".join(meanings[:japanese])
                        card["example"] = "".join(meanings[japanese:])
                        notes = rows(column, 8, y + 10, stop)
                        if notes and notes[0].startswith("Hán Việt:"):
                            first = notes.pop(0).removeprefix("Hán Việt:").strip()
                            if notes and re.fullmatch(r"[ァ-ヺー・]+", notes[0]):
                                first += notes.pop(0)
                            card["han"] = first
                        card["translation"] = " ".join(notes)
                    ruby = [s for s in column if abs(s["size"] - 6) < .06
                            and y - 16 <= s["origin"][1] < reading_end]
                    card["furigana"] = " · ".join(s["text"].strip() for s in sorted(ruby, key=lambda s: (s["origin"][1], s["origin"][0])))
                    cards.append(card)
    cards.sort(key=lambda c: c["id"])
    assert [c["id"] for c in cards] == list(range(1, expected + 1))
    assert all(c["group"] in labels for c in cards)
    missing = {key: [c["id"] for c in cards if not c.get(key)] for key in ["word", "meaning", "example", "translation"]}
    required = {"word", "meaning"} if sentences else set(missing)
    assert all(not missing[key] for key in required), missing
    groups = [[str(k), v, [c["id"] for c in cards if c["group"] == k]] for k, v in labels.items()]
    for card in cards:
        del card["group"]
    return {"words": cards, "topics": groups}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("vocabulary")
    parser.add_argument("sentences")
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    for file, is_sentence, count, variable in [
        (args.vocabulary, False, 1117, "WORK_VOCAB"),
        (args.sentences, True, 128, "WORK_SENTENCES"),
    ]:
        data = extract(file, is_sentence, count)
        output = root / (variable.lower() + ".js")
        output.write_text("const " + variable + " = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n", encoding="utf-8")

"""Extract the vocabulary cards from the supplied two-column PDF."""
import argparse
import json
import re
from pathlib import Path

import fitz


def extract(pdf):
    cards = []
    with fitz.open(pdf) as document:
        for page_number, page in enumerate(document, 1):
            for left, right in [(0, page.rect.width / 2), (page.rect.width / 2, page.rect.width)]:
                clip = fitz.Rect(left, 0, right, page.rect.height)
                spans = [
                    span for block in page.get_text("dict", clip=clip)["blocks"]
                    for line in block.get("lines", []) for span in line["spans"]
                ]
                headings = [s for s in spans if abs(s["size"] - 15) < .1]
                for index, heading in enumerate(headings):
                    y = heading["origin"][1]
                    end = headings[index + 1]["origin"][1] - 20 if index + 1 < len(headings) else 10000

                    def line(start, stop, size):
                        matched = [s for s in spans if y + start <= s["origin"][1] <= y + stop
                                   and abs(s["size"] - size) < .1 and s["origin"][1] < end]
                        return "".join(s["text"] for s in sorted(matched, key=lambda s: s["origin"][0])).strip()

                    number = line(-.1, .1, 7.5)
                    if not number.isdigit():
                        continue
                    word = heading["text"].strip()
                    ruby = line(-15, -13, 6)
                    reading = word if not ruby else ruby + re.search(r"[ぁ-ゖァ-ヺー]*$", word)[0]
                    # Kana before the first kanji is printed in the headword itself.
                    if ruby:
                        reading = re.match(r"[ぁ-ゖァ-ヺー]*", word)[0] + reading
                    han = re.sub(r"^Hán Việt:\s*", "", (line(11, 13, 8) + line(20, 23, 8)))
                    example = line(28, 43, 9.5)
                    translation = line(41, 55, 8)
                    cards.append(dict(id=int(number), page=page_number, word=word, reading=reading,
                                      meaning=line(-.1, .1, 9.5), han=han, example=example, translation=translation))
    cards.sort(key=lambda card: card["id"])
    if [c["id"] for c in cards] != list(range(1, 1001)):
        from collections import Counter
        counts = Counter(c["id"] for c in cards)
        raise ValueError(f"Expected IDs 1–1000 exactly once. Exceptions: {[i for i in range(1, 1001) if counts[i] != 1]}")
    return cards


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf")
    args = parser.parse_args()
    cards = extract(args.pdf)
    output = Path(__file__).resolve().parents[1] / "words.js"
    output.write_text("const WORDS = " + json.dumps(cards, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")

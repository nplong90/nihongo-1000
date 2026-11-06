"use strict";

const DAY = 86_400_000;
const STORAGE_KEY = "nihongo-1000-v1";
const byId = id => document.getElementById(id);
const screen = byId("screen");
const lesson = byId("lesson");
const status = byId("status");
let progress = {};
let storageAvailable = true;
try {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  if (stored && typeof stored === "object" && !Array.isArray(stored)) progress = stored;
} catch {
  storageAvailable = false;
}

let mode = "flash";
let deck = [];
let index = 0;
let flipped = false;
let score = 0;
let quizAnswer = null;
let choices = [];

function add(parent, tag, text, className) {
  const node = document.createElement(tag);
  node.textContent = text;
  if (className) node.className = className;
  parent.append(node);
  return node;
}

function button(parent, label, action, className) {
  const node = add(parent, "button", label, className);
  node.type = "button";
  node.addEventListener("click", action);
  return node;
}

function dueWords() {
  const now = Date.now();
  return WORDS.filter(word => progress[word.id]?.due <= now);
}

function updateProgress() {
  const studied = WORDS.filter(word => progress[word.id]).length;
  byId("progress").value = studied;
  byId("progressLabel").textContent = studied + " / 1.000 từ đã ôn";
  byId("dueLabel").textContent = dueWords().length + " từ đến hạn";
}

function grade(word, remembered) {
  const previous = progress[word.id]?.level || 0;
  const level = remembered ? Math.min(previous + 1, 5) : 0;
  const interval = [DAY / 144, DAY, 3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY][level];
  progress[word.id] = { level, due: Date.now() + interval };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    storageAvailable = false;
  }
  updateProgress();
}

function speak(word) {
  if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
    status.textContent = "Trình duyệt này chưa hỗ trợ phát âm.";
    return;
  }
  const utterance = new SpeechSynthesisUtterance(word.reading);
  utterance.lang = "ja-JP";
  const voice = speechSynthesis.getVoices().find(item => /^ja(?:-|_|$)/i.test(item.lang));
  if (voice) utterance.voice = voice;
  utterance.onerror = event => {
    if (!["interrupted", "canceled"].includes(event.error)) status.textContent = "Thiết bị chưa phát được giọng tiếng Nhật.";
  };
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function answer(parent, word) {
  const area = add(parent, "div", "", "answer");
  add(area, "p", word.reading, "reading").lang = "ja";
  add(area, "strong", word.meaning);
  if (word.han && word.han !== "—") add(area, "p", "Hán Việt · " + word.han, "muted");
  add(area, "p", word.example).lang = "ja";
  add(area, "p", word.translation, "muted");
  return area;
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function start(nextMode = mode) {
  mode = nextMode;
  const first = Number(lesson.value) * 20;
  deck = mode === "review" ? dueWords() : WORDS.slice(first, first + 20);
  if (mode === "quiz") deck = shuffle(deck);
  index = 0;
  score = 0;
  flipped = false;
  choices = [];
  quizAnswer = null;
  for (const tab of document.querySelectorAll("[data-mode]")) {
    tab.setAttribute("aria-pressed", String(tab.dataset.mode === mode));
  }
  byId("lessonBar").hidden = mode === "review" || mode === "browse";
  render();
}

function advance() {
  index++;
  flipped = false;
  choices = [];
  quizAnswer = null;
  render();
  screen.querySelector("button")?.focus();
}

function showQuiz(panel, word) {
  if (!choices.length) {
    const meanings = [...new Set(shuffle(deck).map(item => item.meaning))].filter(text => text !== word.meaning);
    choices = shuffle([word.meaning, ...meanings.slice(0, 3)]);
  }
  add(panel, "p", "Chọn nghĩa tiếng Việt.");
  const options = add(panel, "div", "", "quiz-options");
  for (const choice of choices) {
    const option = button(options, choice, () => {
      quizAnswer = choice;
      const correct = choice === word.meaning;
      score += Number(correct);
      grade(word, correct);
      render();
      byId("quizNext").focus();
    });
    option.disabled = quizAnswer !== null;
    if (quizAnswer !== null && choice === word.meaning) option.className = "correct";
    if (quizAnswer === choice && choice !== word.meaning) option.className = "wrong";
  }
  if (quizAnswer !== null) {
    add(panel, "strong", quizAnswer === word.meaning ? "✓ Đúng" : "✗ Sai");
    answer(panel, word);
    button(add(panel, "div", "", "actions"), "Câu tiếp", advance, "primary").id = "quizNext";
  }
}

function showBrowse(panel) {
  const search = add(panel, "input", "");
  search.type = "search";
  search.placeholder = "Ví dụ 日本, にほん hoặc Nhật Bản";
  search.setAttribute("aria-label", "Tìm từ tiếng Nhật hoặc nghĩa tiếng Việt");
  const results = add(panel, "div", "");
  const normalize = text => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  function filter() {
    const query = normalize(search.value.trim());
    const matches = query ? WORDS.filter(word => [word.word, word.reading, word.meaning].some(text => normalize(text).includes(query))) : WORDS;
    results.replaceChildren();
    const info = add(results, "p", matches.length + " từ" + (matches.length > 40 ? " · đang hiện 40 từ đầu" : ""), "muted");
    info.setAttribute("role", "status");
    for (const word of matches.slice(0, 40)) {
      const detail = add(results, "details", "");
      const title = add(detail, "summary", "");
      add(title, "span", word.word).lang = "ja";
      title.append(" · " + word.meaning);
      answer(detail, word);
      button(detail, "Nghe", () => speak(word));
    }
  }
  search.addEventListener("input", filter);
  filter();
}

function render() {
  screen.replaceChildren();
  status.textContent = storageAvailable ? "" : "Tiến độ chỉ được giữ trong phiên này.";
  const panel = add(screen, "div", "", "panel");
  if (mode === "browse") {
    showBrowse(panel);
    return;
  }
  const word = deck[index];
  if (!word) {
    add(panel, "h2", deck.length ? "Hoàn thành lượt học" : "Chưa có từ đến hạn ôn");
    if (mode === "quiz") add(panel, "p", "Bạn trả lời đúng " + score + " / " + deck.length + " câu.");
    if (mode === "review") button(panel, "Học flashcard", () => start("flash"), "primary");
    else {
      const actions = add(panel, "div", "", "actions");
      button(actions, "Làm lại bài", () => start(), "primary");
      if (lesson.selectedIndex < lesson.options.length - 1) button(actions, "Bài tiếp theo", () => {
        lesson.selectedIndex++;
        start();
      });
    }
    return;
  }
  add(panel, "p", "THẺ " + (index + 1) + " / " + deck.length + " · TỪ #" + word.id, "kicker");
  add(panel, "h2", word.word, "word").lang = "ja";
  if (mode === "quiz") {
    showQuiz(panel, word);
    return;
  }
  if (flipped) answer(panel, word);
  const actions = add(panel, "div", "", "actions");
  if (!flipped) button(actions, "Lật thẻ", () => {
    flipped = true;
    render();
    screen.querySelector("button")?.focus();
  }, "primary");
  else {
    button(actions, "Ôn lại", () => { grade(word, false); advance(); });
    button(actions, "Đã nhớ", () => { grade(word, true); advance(); }, "primary");
  }
  button(actions, "Nghe", () => speak(word));
  button(actions, "Bỏ qua", advance);
}

for (let i = 0; i < WORDS.length / 20; i++) {
  const option = add(lesson, "option", "Bài " + (i + 1) + " · Từ " + (i * 20 + 1) + "–" + (i + 1) * 20);
  option.value = i;
}
lesson.addEventListener("change", () => start());
for (const tab of document.querySelectorAll("[data-mode]")) {
  tab.addEventListener("click", () => start(tab.dataset.mode));
}
updateProgress();
start();

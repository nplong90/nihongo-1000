"use strict";

const DAY = 86_400_000;
const STORAGE_KEY = "nihongo-1000-v1";
const byId = id => document.getElementById(id);
const screen = byId("screen");
const lesson = byId("lesson");
const topic = byId("topic");
const lessonSize = 20;
const collection = byId("collection");
const collections = {
  general: { words: WORDS, topics: TOPICS },
  "work-vocab": WORK_VOCAB,
  "work-sentences": WORK_SENTENCES,
};
let activeWords = WORDS;
let topicWords = new Map();
let unit = "từ";
let storageKey = STORAGE_KEY;
const progressByCollection = new Map();

function selectCollection() {
  const key = collection.value;
  const selected = collections[key];
  activeWords = selected.words;
  unit = key === "work-sentences" ? "câu" : "từ";
  storageKey = key === "general" ? STORAGE_KEY : STORAGE_KEY + ":" + key;
  progress = progressByCollection.get(storageKey) || readProgress();
  progressByCollection.set(storageKey, progress);

  const topicByWord = new Map();
  topicWords = new Map();
  topic.replaceChildren();
  for (const [id, , ids] of selected.topics) {
    topicWords.set(id, []);
    for (const wordId of ids) topicByWord.set(wordId, id);
  }
  for (const word of activeWords) topicWords.get(topicByWord.get(word.id) || "general").push(word);
  topicWords.set("frequency", activeWords);
  const allLabel = key === "general" ? "Tất cả theo thứ tự gốc" : "Tất cả tình huống";
  for (const [id, label] of [...selected.topics, ["frequency", allLabel]]) {
    const option = add(topic, "option", label + " (" + topicWords.get(id).length + ")");
    option.value = id;
  }
  populateLessons();
  updateProgress();
  start();
}

function populateLessons() {
  lesson.replaceChildren();
  const words = topicWords.get(topic.value);
  for (let first = 0; first < words.length; first += lessonSize) {
    const count = Math.min(lessonSize, words.length - first);
    const option = add(lesson, "option", "Bài " + (first / lessonSize + 1) + " · " + count + " " + unit);
    option.value = first;
  }
}
const status = byId("status");
let progress = {};
let storageAvailable = true;
function readProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
    if (stored && typeof stored === "object" && !Array.isArray(stored)) return stored;
  } catch {
    storageAvailable = false;
  }
  return {};
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
  return activeWords.filter(word => progress[word.id]?.due <= now);
}

function updateProgress() {
  const studied = activeWords.filter(word => progress[word.id]).length;
  byId("progress").max = activeWords.length;
  byId("progress").value = studied;
  byId("progressLabel").textContent = studied + " / " + activeWords.length.toLocaleString("vi-VN") + " " + unit + " đã ôn";
  byId("dueLabel").textContent = dueWords().length + " " + unit + " đến hạn";
}

function grade(word, remembered) {
  const previous = progress[word.id]?.level || 0;
  const level = remembered ? Math.min(previous + 1, 5) : 0;
  const interval = [DAY / 144, DAY, 3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY][level];
  progress[word.id] = { level, due: Date.now() + interval };
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
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
  const utterance = new SpeechSynthesisUtterance(word.reading || word.word);
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
  if (word.reading) add(area, "p", word.reading, "reading").lang = "ja";
  if (word.furigana) add(area, "p", "Furigana · " + word.furigana, "reading");
  add(area, "strong", word.meaning);
  if (word.han && word.han !== "—") add(area, "p", "Hán Việt · " + word.han, "muted");
  if (word.example) add(area, "p", word.example).lang = "ja";
  if (word.translation) add(area, "p", word.translation, "muted");
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
  const first = Number(lesson.value);
  deck = mode === "review" ? dueWords() : topicWords.get(topic.value).slice(first, first + lessonSize);
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
    const sameTopic = topicWords.get(topic.value);
    const pool = [...shuffle(deck), ...shuffle(sameTopic), ...activeWords];
    const meanings = [...new Set(pool.map(item => item.meaning))].filter(text => text !== word.meaning);
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
  search.placeholder = "Nhập chữ Nhật, kana hoặc nghĩa tiếng Việt";
  search.setAttribute("aria-label", "Tìm tiếng Nhật hoặc nghĩa tiếng Việt");
  const results = add(panel, "div", "");
  const normalize = text => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  function filter() {
    const query = normalize(search.value.trim());
    const matches = query ? activeWords.filter(word => [word.word, word.reading, word.furigana, word.meaning].some(text => text && normalize(text).includes(query))) : activeWords;
    results.replaceChildren();
    const info = add(results, "p", matches.length + " " + unit + (matches.length > 40 ? " · đang hiện 40 mục đầu" : ""), "muted");
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
    add(panel, "h2", deck.length ? "Hoàn thành lượt học" : "Chưa có " + unit + " đến hạn ôn");
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
  add(panel, "p", "THẺ " + (index + 1) + " / " + deck.length + " · #" + word.id, "kicker");
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

collection.addEventListener("change", selectCollection);
topic.addEventListener("change", () => {
  populateLessons();
  start();
});
lesson.addEventListener("change", () => start());
for (const tab of document.querySelectorAll("[data-mode]")) {
  tab.addEventListener("click", () => start(tab.dataset.mode));
}
selectCollection();

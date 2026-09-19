const { randomUUID } = require("crypto");
const topics = require("../data/os-topics.json");
const store = require("../data/store");
const geminiService = require("../services/geminiService");

async function getBossQuiz(req, res) {
  const masteredIds = Object.keys(store.topicProgress || {}).filter(
    (id) => store.topicProgress[id].status === "mastered"
  );
  const masteredTopics = topics.filter((t) => masteredIds.includes(String(t.id)));

  if (masteredTopics.length === 0) {
    return res.status(400).json({ success: false, error: "No topics mastered yet." });
  }

  const questions = await geminiService.generateBossQuestions(masteredTopics);
  const questionsWithIds = questions.map((q, i) => ({ id: i + 1, ...q }));

  const quizId = randomUUID();
  store.quizzes[quizId] = { topicId: "boss", questions: questionsWithIds };

  const clientQuestions = questionsWithIds.map(({ correctAnswer, ...rest }) => rest);
  res.json({ success: true, data: { quizId, questions: clientQuestions } });
}

module.exports = { getBossQuiz };
const { randomUUID } = require("crypto");
const topics = require("../data/os-topics.json");
const store = require("../data/store");
const geminiService = require("../services/geminiService");
const quizService = require("../services/quizService");

async function getTopicQuiz(req, res) {
  const topicId = Number(req.params.id);
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return res.status(404).json({ success: false, error: "Topic not found." });

  const questions = await geminiService.generateTopicQuestions(topic.name, topic.text);
  const questionsWithIds = questions.map((q, i) => ({ id: i + 1, ...q }));

  const quizId = randomUUID();
  store.quizzes[quizId] = { topicId, questions: questionsWithIds };

  const clientQuestions = questionsWithIds.map(({ correctAnswer, ...rest }) => rest);
  res.json({ success: true, data: { quizId, questions: clientQuestions } });
}

async function submitTopicQuiz(req, res) {
  const topicId = Number(req.params.id);
  const { quizId, answers } = req.body;
  const quiz = store.quizzes[quizId];
  if (!quiz) return res.status(400).json({ success: false, error: "Valid quizId required." });

  const normalized = {};
  Object.keys(answers).forEach((k) => (normalized[Number(k)] = answers[k]));

  const result = quizService.calculateScore(
    quiz.questions.map((q) => ({ ...q, concept: topicId })),
    normalized
  );
  const mastery = quizService.evaluateMastery(result.score, result.total);

  store.topicProgress[topicId] = { mastery: mastery.percent, status: mastery.mastered ? "mastered" : "unlocked" };

  if (mastery.mastered) {
    store.xp += 50;
    store.streak += 1;
    const next = topics.find((t) => t.order === topics.find((tp) => tp.id === topicId).order + 1);
    if (next && !store.topicProgress[next.id]) {
      store.topicProgress[next.id] = { mastery: 0, status: "unlocked" };
    }
  } else {
    store.streak = 0;
  }

  res.json({ success: true, data: { ...result, ...mastery } });
}

async function retryTopicQuiz(req, res) {
  const topicId = Number(req.params.id);
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return res.status(404).json({ success: false, error: "Topic not found." });

  const { explanation, questions } = await geminiService.generateRetryQuestions(topic.name, topic.text);
  const questionsWithIds = questions.map((q, i) => ({ id: i + 1, ...q }));

  const quizId = randomUUID();
  store.quizzes[quizId] = { topicId, questions: questionsWithIds };

  const clientQuestions = questionsWithIds.map(({ correctAnswer, ...rest }) => rest);
  res.json({ success: true, data: { quizId, explanation, questions: clientQuestions } });
}

module.exports = { getTopicQuiz, submitTopicQuiz, retryTopicQuiz };
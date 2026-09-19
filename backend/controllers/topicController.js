const topics = require("../data/os-topics.json");
const store = require("../data/store");

async function getTopics(req, res) {
  const topicsWithStatus = topics.map((t) => {
    const progress = store.topicProgress?.[t.id];
    return {
      id: t.id,
      name: t.name,
      order: t.order,
      mastery: progress?.mastery || 0,
      status: progress?.status || (t.order === 1 ? "unlocked" : "locked"),
    };
  });
  res.json({ success: true, data: topicsWithStatus });
}
async function getTopicLesson(req, res) {
  const topicId = Number(req.params.id);
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return res.status(404).json({ success: false, error: "Topic not found." });

  const geminiService = require("../services/geminiService");
  const scenes = await geminiService.generateLessonScenes(topic.name, topic.text);
  res.json({ success: true, data: { topicId, scenes } });
}

module.exports = { getTopics, getTopicLesson };
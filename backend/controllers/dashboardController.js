const topics = require("../data/os-topics.json");
const store = require("../data/store");

async function getDashboard(req, res) {
  const topicsWithStatus = topics.map((t) => ({
    id: t.id,
    name: t.name,
    mastery: store.topicProgress?.[t.id]?.mastery || 0,
    status: store.topicProgress?.[t.id]?.status || (t.order === 1 ? "unlocked" : "locked"),
  }));

  const weakest = topicsWithStatus
    .filter((t) => t.status !== "locked")
    .sort((a, b) => a.mastery - b.mastery)[0];

  const currentTopic = topicsWithStatus.find((t) => t.status === "unlocked") || topicsWithStatus[0];

  res.json({
    success: true,
    data: {
      xp: store.xp || 0,
      streak: store.streak || 0,
      currentTopic: currentTopic?.name,
      weakestTopic: weakest?.name,
      topics: topicsWithStatus,
    },
  });
}

module.exports = { getDashboard };
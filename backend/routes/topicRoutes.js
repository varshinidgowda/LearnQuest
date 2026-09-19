const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
const { getTopics } = require("../controllers/topicController");
const { getTopicQuiz, submitTopicQuiz } = require("../controllers/topicQuizController");
const { getTopicLesson } = require("../controllers/topicController");
const { retryTopicQuiz } = require("../controllers/topicQuizController");


router.get("/", asyncHandler(getTopics));
router.get("/:id/quiz", asyncHandler(getTopicQuiz));
router.post("/:id/submit", asyncHandler(submitTopicQuiz));
router.get("/:id/lesson", asyncHandler(getTopicLesson));
router.post("/:id/retry", asyncHandler(retryTopicQuiz));

module.exports = router;
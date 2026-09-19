const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
const { getBossQuiz } = require("../controllers/bossController");

router.get("/", asyncHandler(getBossQuiz));

module.exports = router;
const express = require("express");

const router = express.Router();

const asyncHandler =
    require("../utils/asyncHandler");

const {
    analyzeNotes
} = require("../controllers/analyzeController");

router.post(
    "/",
    asyncHandler(analyzeNotes)
);

module.exports = router;
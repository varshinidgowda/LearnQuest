const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
const { getDashboard } = require("../controllers/dashboardController");

router.get("/", asyncHandler(getDashboard));

module.exports = router;

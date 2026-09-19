require("dotenv").config();

const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const topicRoutes = require("./routes/topicRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const bossRoutes = require("./routes/bossRoutes");
const analyzeRoutes = require("./routes/analyzeRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/topics", topicRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/boss", bossRoutes);
app.use("/api/analyze", analyzeRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "LearnQuest backend is running."
    });
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(
        `LearnQuest backend running on http://localhost:${PORT}`
    );
});
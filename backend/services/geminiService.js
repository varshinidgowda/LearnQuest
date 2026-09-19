const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent";

async function generateVideoScript(notesText) {
  const prompt = `
You are creating a short educational video script from a student's notes.

Notes:
"""
${notesText}
"""

Do the following:
1. Write a clear, spoken-style video script that explains the concepts in these notes,
   using simple real-life examples to aid understanding.
2. List the distinct concepts covered, as short labels.

Respond ONLY in this exact JSON shape, with no extra text:
{
  "script": "...",
  "concepts": ["concept 1", "concept 2"]
}
`;
  const response = await callGemini(prompt);
  return parseJsonFromGemini(response);
}

async function generateQuizQuestions(videoContent, concepts) {
  const prompt = `
You are writing a quiz based STRICTLY on the video content below.
Do not introduce any fact, example, or concept that is not explicitly present in this content.

Video content:
"""
${videoContent}
"""

Concepts covered: ${concepts.join(", ")}

Generate exactly 6 multiple-choice questions total:
- 2 Easy
- 2 Medium
- 2 Hard

Each question must be traceable to something actually said in the video content above.
Tag each question with the single concept (from the list above) it tests.

Respond ONLY in this exact JSON shape, with no extra text:
{
  "questions": [
    {
      "difficulty": "Easy",
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "A",
      "concept": "..."
    }
  ]
}
`;
  const response = await callGemini(prompt);
  const parsed = parseJsonFromGemini(response);
  return parsed.questions;
}

async function callGemini(prompt) {
  if (!GEMINI_API_KEY) {
    const err = new Error("GEMINI_API_KEY is not set in the environment.");
    err.statusCode = 500;
    throw err;
  }

  try {
    const response = await axios.post(
      `${GEMINI_URL}?key=${GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }] },
      { headers: { "Content-Type": "application/json" } }
    );

    const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      const err = new Error("Gemini returned an unexpected response shape.");
      err.statusCode = 502;
      throw err;
    }
    return text;
  } catch (error) {
    if (error.response) {
      const err = new Error(
        `Gemini API error: ${error.response.status} - ${JSON.stringify(error.response.data)}`
      );
      err.statusCode = 502;
      throw err;
    }
    throw error;
  }
}

function parseJsonFromGemini(rawText) {
  const cleaned = rawText.replace(/```json|```/g, "").trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    const err = new Error("Failed to parse JSON from Gemini response. Raw text: " + rawText);
    err.statusCode = 502;
    throw err;
  }
}
async function generateTopicQuestions(topicName, topicText) {
  const prompt = `
Topic: ${topicName}
Study material: """${topicText}"""

Generate exactly 5 multiple-choice questions grounded ONLY in this material:
- 2 concept questions
- 2 scenario questions (real-world situation testing the concept)
- 1 application question

Important: correctAnswer must be the exact text of one of the options, not a letter like A/B/C/D.

Respond ONLY in this JSON shape:
{"questions":[{"question":"...","options":["...","...","...","..."],"correctAnswer":"the exact text of the correct option, copied from options"}]}
`;
  const response = await callGemini(prompt);
  return parseJsonFromGemini(response).questions;
}
async function generateLessonScenes(topicName, topicText) {
  const prompt = `
Topic: ${topicName}
Study material: """${topicText}"""

Create a 4-scene micro-lesson connecting this concept to a real-world scenario.
Respond ONLY in this JSON shape:
{"scenes":[
  {"time":0,"title":"...","text":"...","visual":"..."},
  {"time":8,"title":"...","text":"...","visual":"..."},
  {"time":20,"title":"...","text":"...","visual":"..."},
  {"time":35,"title":"...","text":"...","visual":"..."}
]}
`;
  const response = await callGemini(prompt);
  return parseJsonFromGemini(response).scenes;
}
async function generateRetryQuestions(topicName, topicText, weakConceptSummary) {
  const prompt = `
Topic: ${topicName}
Study material: """${topicText}"""

The student struggled with this topic. Write:
1. A short, clearer re-explanation (2-3 sentences) of the concept.
2. 3 targeted retry questions grounded ONLY in the material above.

Important: correctAnswer must be the exact text of one of the options, not a letter.

Respond ONLY in this JSON shape:
{"explanation":"...","questions":[{"question":"...","options":["...","...","...","..."],"correctAnswer":"..."}]}
`;
  const response = await callGemini(prompt);
  return parseJsonFromGemini(response);
}
async function generateBossQuestions(masteredTopics) {
  const combinedText = masteredTopics.map((t) => `${t.name}: ${t.text}`).join("\n\n");
  const prompt = `
The student has mastered these OS topics:
"""${combinedText}"""

Generate 5 mixed application questions that combine concepts across these topics.

Important: correctAnswer must be the exact text of one of the options, not a letter.

Respond ONLY in this JSON shape:
{"questions":[{"question":"...","options":["...","...","...","..."],"correctAnswer":"..."}]}
`;
  const response = await callGemini(prompt);
  return parseJsonFromGemini(response).questions;
}
module.exports = { generateVideoScript, generateQuizQuestions, generateTopicQuestions, generateLessonScenes,generateRetryQuestions, generateBossQuestions  };
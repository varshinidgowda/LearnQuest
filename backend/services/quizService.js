function calculateScore(questions, studentAnswers) {
  let score = 0;
  const weakConceptsSet = new Set();
  const breakdown = [];

  for (const q of questions) {
    const studentAnswer = studentAnswers[q.id];
    const isCorrect = studentAnswer === q.correctAnswer;

    if (isCorrect) {
      score++;
    } else {
      weakConceptsSet.add(q.concept);
    }

    breakdown.push({
      questionId: q.id,
      concept: q.concept,
      difficulty: q.difficulty,
      correct: isCorrect,
      studentAnswer: studentAnswer || null,
      correctAnswer: q.correctAnswer,
    });
  }

  return {
    score,
    total: questions.length,
    weakConcepts: Array.from(weakConceptsSet),
    breakdown,
  };
}
function evaluateMastery(score, total, thresholdPercent = 70) {
  const percent = Math.round((score / total) * 100);
  return {
    percent,
    mastered: percent >= thresholdPercent,
  };
}

module.exports = { calculateScore, evaluateMastery };
const { generateVideoScript } = require("../services/geminiService");

async function analyzeNotes(req, res) {
    try {
        const notesText = req.body?.notesText;

        if (!notesText) {
            return res.status(400).json({
                success: false,
                error: "Notes text is required."
            });
        }

        const result =
            await generateVideoScript(notesText);

        res.json({
            success: true,
            data: result
        });

    } catch (error) {

        console.error(
            "AI analysis failed:",
            error.message
        );

        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message
        });
    }
}

module.exports = { analyzeNotes };
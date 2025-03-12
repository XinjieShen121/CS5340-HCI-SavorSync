require("dotenv").config();
console.log("Loaded API Key:", process.env.OPENAI_API_KEY); // Debugging line

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

// Set up OpenAI API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY  // Securely stored in .env file
});

// API route to generate a "Hello World" message with a cultural theme
app.get("/generate", async (req, res) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",  // Ensure this is a chat model
            messages: [
                { role: "system", content: "You are an AI that provides cultural cooking insights." },
                { role: "user", content: "Generate a 'Hello World' message with a cultural cooking theme." }
            ],
            max_tokens: 50,
        });

        // ✅ Correct way to access response content
        res.json({ message: response.choices[0].message.content.trim() });

    } catch (error) {
        console.error("OpenAI API Error:", error);  // Log error for debugging
        res.status(500).json({ error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

console.log('GROQ_API_KEY loaded:', process.env.GROQ_API_KEY ? 'YES' : 'NO');
console.log('API Key starts with gsk_:', process.env.GROQ_API_KEY?.startsWith('gsk_'));

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(__dirname)); // serve index.html

// Main Groq proxy — handles ALL prompts (analysis, chat, reply generation)
app.post('/api/groq', async (req, res) => {
  const { prompt } = req.body;
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) return res.status(500).json({ error: 'Server configuration error: GROQ_API_KEY not set' });
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
        max_tokens: 2000
      })
    });

    const data = await groqRes.json();

    if (!groqRes.ok) {
      return res.status(groqRes.status).json({
        error: data.error?.message || `Groq API error ${groqRes.status}`
      });
    }

    let raw = data.choices[0].message.content.trim();

    // Try JSON parse first (for analysis responses)
    raw = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    try {
      const parsed = JSON.parse(raw);
      return res.json(parsed);
    } catch {
      // Not JSON — return as plain text (for chat / reply generation)
      return res.json(raw);
    }

  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('\n╔════════════════════════════════════════╗');
  console.log('║        NYAAY AI SERVER RUNNING         ║');
  console.log('╠════════════════════════════════════════╣');
  console.log(`║  Open: http://localhost:${PORT}           ║`);
  console.log('║  Get API key: console.groq.com/keys    ║');
  console.log('╚════════════════════════════════════════╝\n');
});

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch').default;

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'content-type': 'application/json',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 256,
        messages: [
          { role: 'user', content: message }
        ]
      })
    });
    const data = await response.json();
    console.log(data);
    const reply = data.content && data.content[0] && data.content[0].text ? data.content[0].text.trim() : "Sorry, I couldn't get a response.";
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Sorry, I'm having trouble answering right now. Please try again later." });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 
const express = require("express");
const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const { youtube_url } = req.body;

  console.log("Received URL:", youtube_url);

  // Mock transcript
  const transcript = `
    Scene 1:
    A man sits at a desk with a laptop, typing.
    He says: "So I tried faceless YouTube automation for 30 days..."
    Background: a simple modern room, bookshelves, soft daylight.
    Sound: keyboard typing, ambient room noise.
    Edit: camera slowly zooms in.

    Scene 2:
    Screen recording of a YouTube analytics page.
    Voice: "...and here’s what happened."
    Background music fades in softly.
    Edit: quick pan to subscriber growth chart.

    Scene 3:
    Cut to AI-generated talking head explaining strategy.
    Voice: "I used ChatGPT to write scripts, ElevenLabs for voice..."
    Motion: mouth syncs to voice, casual hand gestures.
    Tone: Motivational, clear, informative.
  `;

  res.json({
    message: `Đã nhận URL: ${youtube_url}`,
    transcript: transcript.trim(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

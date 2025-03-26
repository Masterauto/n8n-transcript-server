import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

app.post("/transcribe", async (req, res) => {
  const { videoUrl, apiKey } = req.body;

  if (!videoUrl || !apiKey) {
    return res.status(400).json({ error: "Missing videoUrl or apiKey" });
  }

  try {
    // Gửi POST tới AssemblyAI để transcribe
    const response = await axios.post(
      "https://api.assemblyai.com/v2/transcript",
      {
        audio_url: videoUrl,
        auto_chapters: true,
        format_text: true,
        punctuate: true,
      },
      {
        headers: {
          authorization: apiKey,
          "content-type": "application/json",
        },
      }
    );

    res.json({ transcript_id: response.data.id });
  } catch (error) {
    console.error(error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to start transcription" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

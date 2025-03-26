const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/transcribe', (req, res) => {
  const youtubeUrl = req.body.youtube_url;

  if (!youtubeUrl) {
    return res.status(400).json({ error: 'Missing YouTube URL' });
  }

  // Giả lập phản hồi thành công
  return res.json({ message: `Đã nhận URL: ${youtubeUrl}` });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại cổng ${PORT}`);
});

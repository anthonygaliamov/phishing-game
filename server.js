const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Starting Phishing Game server — PID', process.pid, 'PORT', PORT);
const publicDir = path.join(__dirname, 'public');
console.log('Public directory:', publicDir, 'exists=', fs.existsSync(publicDir));

app.use(express.static(publicDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'), (err) => {
    if (err) {
      console.error('sendFile error:', err);
      if (!res.headersSent) res.status(500).send('Server error');
    }
  });
});

const server = app.listen(PORT, () => {
  console.log(`✅ Phishing Game running at http://localhost:${PORT}`);
});

server.on('error', (err) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});

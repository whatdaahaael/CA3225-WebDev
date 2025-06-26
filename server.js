const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HTML_FILE = process.env.HTML_FILE || 'basic-profile-page.html';

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, HTML_FILE));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Serving file: ${HTML_FILE}`);
}); 
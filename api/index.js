export default async function handler(req, res) {
  const path = require('path');
  const htmlFile = process.env.HTML_FILE || 'api/timetable.html';
  const filePath = path.join(process.cwd(), htmlFile);
  console.log('Resolved file path:', filePath); // Debug log
  try {
    const fs = await import('fs/promises');
    const data = await fs.readFile(filePath, 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send('File not found');
  }
} 
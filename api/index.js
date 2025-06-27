export default async function handler(req, res) {
  const htmlFile = process.env.HTML_FILE || 'all-pages/timetable.html';
  try {
    const fs = await import('fs/promises');
    const data = await fs.readFile(htmlFile, 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send('File not found');
  }
} 
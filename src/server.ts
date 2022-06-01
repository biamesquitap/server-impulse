import express from 'express'

const app = express();

app.get('/feedbacks', (req, res) => {
  return res.send('Hello darling!');
})

app.listen(3333, () => {
  console.log('HTTP server running!');
});
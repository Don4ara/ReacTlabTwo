const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:8080', 
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.post('/set-settings', (req, res) => {
  const { darkmode, isRussian } = req.body;
  res.cookie('darkmode', darkmode, { maxAge: 900000, httpOnly: true });
  res.cookie('isRussian', isRussian, { maxAge: 900000, httpOnly: true });
  res.status(200).send('Settings saved');
});

app.get('/get-settings', (req, res) => {
  const darkmode = req.cookies.darkmode === 'true';
  const isRussian = req.cookies.isRussian === 'true';
  res.json({ darkmode, isRussian });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

const express = require("express");
const app = express();
const path = require('path');
const port = 3000;

const errorPage = (req, res) => res.sendFile(path.join(__dirname, '/404.html'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(path.join(__dirname, '/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/404.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


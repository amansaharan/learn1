const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/intro', (req, res) => {
  res.send({ name: 'Aman Saharan', age: 35 });
});

app.listen(5001, () => {
  console.log('App is running on PORT', 5001);
});

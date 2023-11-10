const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/intro', (req, res) => {
  res.send({ name: 'Aman Saharan', age: 35 });
});

app.listen(port, () => {
  console.log('App is running on PORT', port);
});

'use strict';

const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(__dirname));

// app.get('/', (req, res) => {
//   res.send('HELLO')
// });

app.listen(1337, () => {
  console.log('Server listening on port', 1337);
});

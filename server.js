'use strict';

const express = require('express');
const volleyball = require('volleyball');

const app = express();
const path = require('path');

app.use(volleyball);

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use(express.static(__dirname));

const PORT = process.env.PORT || 1337

app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});

'use strict';

const express = require('express');

// Constants
const PORT = 3050;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3050);
console.log(`Running on http://${HOST}:${PORT}`);

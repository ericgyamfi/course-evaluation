const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

const MONGO_URI = 'mongodb://localhost:27017/course-evaluation';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('Database is connected');
  })
  .catch(err => {
    console.log(err);
  });

app.listen(port, () => {
  console.log('Server is connected!');
});

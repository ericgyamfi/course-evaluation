const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const evaluationRoutes = require('./routes/evaluation');

const app = express();
const port = 5000;

app.use(express.json());

app.use(authRoutes);
app.use(evaluationRoutes);

// create a fake course for testing
// const Course = require('./models/Course');
// Course.create({
//   courseCode: 'CSCD231',
//   courseTitle: 'Introduction to Material Science',
//   lecturer: 'James Ecklu'
// })
//   .then(result => {
//     console.log('course created successfully');
//   })
//   .catch(err => console.log(err));

// setting headers using cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// middleware for error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

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

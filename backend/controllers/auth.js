const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.addStudent = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const stdID = req.body.stdID;
  const stdPin = req.body.stdPin;
  const email = req.body.email;

  bcrypt
    .hash(stdPin, 12)
    .then(hashedPin => {
      const student = new Student({
        studentID: stdID,
        studentPin: hashedPin,
        email: email
      });
      return student.save();
    })
    .then(result => {
      res.status(201).json({ message: 'Student account has been created!' });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogin = (req, res, next) => {
  const stdID = req.body.stdID;
  const stdPin = req.body.stdPin;

  let loggedInStudent;

  Student.findOne({ stdID: stdID })
    .then(student => {
      if (!student) {
        const error = new Error('A user with this email could not be found');
        error.statusCode = 401;
        throw error;
      }
      return bcrypt
        .compare(stdPin, student.studentPin)
        .then(isEqual => {
          if (!isEqual) {
            const error = new Error('You entered the wrong password');
            error.statusCode = 401;
            throw error;
          }
          const token = jwt.sign(
            {
              email: loggedInStudent.email,
              stdId: loggedInStudent._id.toString()
            },
            'youcanttellthetokensecretjustlikethat',
            { expiresIn: '1h' }
          );
          res
            .status(200)
            .json({ token: token, stdId: loggedInStudent._id.toString() });
        })
        .catch(err => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next();
        });
    })
    .catch(err => {
      console.log(err);
    });
};

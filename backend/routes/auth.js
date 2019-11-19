const router = require('express').Router();
const { body } = require('express-validator');
const { postLogin, addStudent } = require('../controllers/auth');

router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .normalizeEmail()
  ],
  postLogin
);

router.post(
  '/add-student',
  [
    body('stdEmail')
      .isEmail()
      .withMessage('Please enter a valid email')
      .normalizeEmail(),
    body('stdID')
      .isNumeric()
      .isLength({ max: 8, min: 8 })
      .withMessage('Please enter a valid student ID')
  ],
  addStudent
);

module.exports = router;

const router = require('express').Router();
const {
  getCourses,
  getCourseEvaluation,
  postCourseEvaluation
} = require('../controllers/evalutation');

router.get('/courses', getCourses);

module.exports = router;

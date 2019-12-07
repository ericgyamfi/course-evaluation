const CourseEvaluation = require('../models/CourseEvaluation');
const Course = require('../models/Course');

exports.getCourses = (req, res) => {
  Course.find()
    .then(result => {
      res.status(200).json({
        message: 'Courses loaded',
        courses: result
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCourseEvaluation = (req, res) => {
  const courseCode = req.body.courseCode;
  const questionOne = req.body.questionOne;
  const questionTwo = req.body.questionTwo;
  const questionThree = req.body.questionThree;
  const questionFour = req.body.questioFour;
  const questionFive = req.body.questioFive;

  const studentEvaluation = new CourseEvaluation({
    courseCode: courseCode,
    evaluationQuestions: {
      question1: questionOne,
      question2: questionTwo,
      question3: questionThree,
      question4: questionFour,
      question5: questionFive
    }
  });
  return studentEvaluation
    .save()
    .then(evaluation => {
      console.log(evaluation);
      res.status(201).json({
        message: 'Course evaluation successful'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postCourseEvaluation = (req, res) => {};

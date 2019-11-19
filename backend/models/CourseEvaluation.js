const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseEvaluationSchema = new Schema({
  courseCode: {
    type: String,
    required: true,
    ref: 'Course'
  },
  studenId: {
    type: String,
    required: true,
    ref: 'Student'
  },
  evaluationQuestions: {
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String
  }
});

module.exports = mongoose.model('CourseEvaluation', courseEvaluationSchema);

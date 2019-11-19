const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseCode: {
    type: String,
    required: true
  },
  courseTitle: {
    type: String,
    required: true
  },
  lecturer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Course', courseSchema);

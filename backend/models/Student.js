const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentID: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  studentPin: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);

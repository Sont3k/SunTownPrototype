const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const VideoSchema = new mongoose.Schema({
  hasRu: {
    type: Boolean,
    required: true,
    default: false
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  descriptionRu: {
    type: String
  },
  video: {
    type: String,
    required: true
  },
  videoTitle: {
    type: String,
    required: true
  }
})

VideoSchema.plugin(uniqueValidator, { message: 'Ошибка: поле {PATH} с таким значением уже существует.' });

module.exports = mongoose.model('Video', VideoSchema);
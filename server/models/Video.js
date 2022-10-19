const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  video_id: {
    type: String,
    required: true,
  },
  video_description: {
    type: String,
    required: true,
  },
  video_Category: {
    type: String,
    required: true,
  },
  upload_link: {
    type: String,
    required: true,
  },
  video_length: {
    type: String,
    required: true,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Video = mongoose.model('Video', VideoSchema);

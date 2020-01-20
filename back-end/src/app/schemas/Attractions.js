const mongoose = require('mongoose');
const PointSchema = require('./util/PointSchema');

const AttractionSchema = new mongoose.Schema({
  title: String,
  description: String,
  history: String,
  picture_url: String,
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

module.exports = mongoose.model('Attraction', AttractionSchema);

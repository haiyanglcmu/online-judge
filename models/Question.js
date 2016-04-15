'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  name: {type: String, default: ''},
  description: {type: String, default: ''},
  template: {type: String, default: ''},
  metaData: {type: String, default: ''},
  testScript: {type: String, default: ''}
});

mongoose.model('Question', QuestionSchema);
const mongoose = require('mongoose');
const question = mongoose.model('Question');

/**
 * create question
 */

exports.new = function(req, res) {
  const created = req.query.created;
  var message;
  var level;
  if (created === 'true') {
    message = 'Successfully created a new question.';
    level = 'info';
  } else if (created === 'false') {
    message = 'Failed to created new question.';
    level = 'error';
  }

  res.render('question/new', {message: message, level: level});
};

exports.create = function(req, res) {
  const testScript = req.body.testScript.replace(/\s/g, '');

  const question = new question({
    description: req.body.description,
    template: req.body.template,
    testScript: testScript
  });
  question.save(function(err) {
    if (err) {
      console.log(err);
      res.redirect('question/new' + '?created=false');
    }
    res.redirect('question/new' + '?created=true');
  });
};

exports.show = function(req, res) {
  res.render('question/index.jade');
};

exports.edit = function(req, res) {
  res.render('question/edit');
};

exports.update = function(req, res) {
  res.render('question/edit');
};

exports.do = function(req, res) {
  res.render('question', {code: req.body.code});
};

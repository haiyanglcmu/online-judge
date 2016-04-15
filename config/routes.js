const question = require('../controllers/question');

module.exports = function(app) {
  app.get('/', question.show); // get index page

  app.get('/question:id', question.show); // get a new question
  app.post('/question/do', question.do); // do a question

  // admin
  app.get('/question/edit', question.edit); // get a form to update a question
  app.get('/question/new', question.new); // get a form to create a new question
  app.put('/question:id', question.update); // update a question
  app.post('/question', question.create); // create a new question
};

var pokemon = require('../controllers/pokemon.js');

module.exports = function(app){
  app.get('/', function(req, res) {
    pokemon.show(req, res);
  });
  app.get('/pokemon/edit/:id', function(req, res){
    pokemon.editform(req, res);
  });
  app.get('/pokemon/new', function(req, res) {
    res.render('new');
  });
  app.get('/pokemon/:id', function(req, res){
    pokemon.view(req, res);
  });
  app.post('/pokemon', function(req, res) {
    pokemon.create(req, res);
  });
  app.post('/pokemon/:id', function(req, res) {
    pokemon.edit(req, res);
  });
  app.post('/pokemon/destroy/:id', function(req, res) {
    pokemon.destroy(req, res);
  });
}

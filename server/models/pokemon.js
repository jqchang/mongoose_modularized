var mongoose = require('mongoose');

var PokemonSchema = new mongoose.Schema({
  name: {type: String, required: true},
  types: [{type: String, maxlength: 20}],
  moves: [{type: String, maxlength: 20}],
}, {timestamps: true});

var Pokemon = mongoose.model('Pokemon', PokemonSchema);

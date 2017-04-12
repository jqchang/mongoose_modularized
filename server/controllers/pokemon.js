var mongoose = require('mongoose');
var Pokemon = mongoose.model('Pokemon');

module.exports = {
  show: function(req, res) {
    Pokemon.find({}, function(err, pkmn) {
      if(err) {
        console.log("error in root")
      } else {
        res.render('index', {pkmn:pkmn});
      }
    })
  },
  create: function(req, res) {
    console.log("POST DATA", req.body);
        // This is where we would add the user from req.body to the database.
    var pkmn = new Pokemon({name: req.body.name, types: [req.body.type1, req.body.type2], moves:[req.body.move1,req.body.move2,req.body.move3,req.body.move4]});

    pkmn.save(function(err){
      if(err) {
        console.log('something went wrong in post /submit save');
      } else {
        console.log('successfully added an animal!');
        res.redirect('/');
      }
    })
  },
  edit: function(req, res) {
    console.log("POST DATA", req.body);
        // This is where we would add the user from req.body to the database.
    Pokemon.findOne({_id:req.params.id}, function(err, pkmn) {
      if(err) {
        console.log("error in UPDATE:id")
      }
      else {
        pkmn.name = req.body.name;
        pkmn.types = [req.body.type1, req.body.type2];
        pkmn.moves = [req.body.move1, req.body.move2, req.body.move3, req.body.move4];
        pkmn.save(function(err) {
          if(err) {
            console.log('error in UPDATE:id post-find')
          }
          else {
            res.redirect(`/pokemon/${req.params.id}`)
          }
        });
      }
    });
  },
  view: function(req, res) {
    console.log(req.params.id);
    Pokemon.findOne({_id:req.params.id}, function(err, pkmn) {
      console.log("checkpoint 1")
      if(err) {
        console.log("error in READ:id")
      } else {
        console.log("attempting to send view");
        console.log(pkmn);
        res.render('view', {pkmn:pkmn});
      }
    });
  },
  editform: function(req, res) {
    console.log(req.params.id);
    Pokemon.findOne({_id:req.params.id}, function(err, pkmn) {
      console.log("checkpoint 1")
      if(err) {
        console.log("error in READ:id")
      } else {
        console.log("attempting to send view");
        console.log(pkmn);
        res.render('edit', {pkmn:pkmn});
      }
    })
  },
  destroy: function(req, res) {
    Pokemon.deleteOne({_id:req.params.id}, function(err, pkmn) {
      if(err) {
        console.log("error in DELETE:id")
      }
      else {
        res.redirect('/')
      }
    });
  }
}

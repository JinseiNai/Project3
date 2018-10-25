const db = require("../server/db/models");

// Defining methods for the favoritesController
module.exports = {
  findAll: function(req, res) {
    db.Favorites
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserId: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate('Favorites')
      .then(userModel => {
        // res.json(userModel.favorites)
        db.Favorites.findOne({
          _id: userModel.favorites
        })
        .then(response => res.json(response))
        // console.log(userModel.favorites)
        // db.Favorites.findOne({_id: userModel.favorites}).then(response => console.log(response))
        // userModel.favorites.map(favorite => db.Favorites.findOne({_id: favorite})
        // .then(response => console.log(response)
        // ))
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(`something create`)
    console.log(req.body)
    db.Favorites
      .create(req.body)
      .then(dbFavorites => {
        console.log(req.params.id)
        return db.User.findOneAndUpdate({_id: req.params.id}, {favorites: dbFavorites._id}, {new: true})
        
      })
      .then(function(dbUser){
        res.json(dbUser)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Favorites
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Favorites
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

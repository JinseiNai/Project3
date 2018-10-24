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
  findById: function(req, res) {
    db.Favorites
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(`something create`)
    console.log(req.body)
    db.Favorites
      .create(req.body)
      .then(dbFavorites => {
        console.log(dbFavorites)
        // return db.User.findOneAndUpdate({_id: req.params.id}, {Favorites: dbFavorites.id}, {new: true})
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

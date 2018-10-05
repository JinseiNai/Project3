const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  site: String
  
});

const Favorites = mongoose.model("favorites", favoritesSchema);

module.exports = Favorites;

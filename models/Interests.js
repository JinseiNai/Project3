const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interestsSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  site: String
  
});

const Interests = mongoose.model("interests", interestsSchema);

module.exports = Interests;

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const yelpSchema = new Schema({
    yelpName: { type: String, unique: false},
    yelpAddress: { type: String, unique: false},
    yelpPhone: { type: String, unique: false},
    yelpImage: { type: String, unique: false},
    yelpRating: { type: String, unique: false}, 
    yelpPrice: { type: String, unique: false}, 
    yelpURL: { type: String, unique: false}
})

const YelpResults = mongoose.model("yelpresults", yelpSchema);

module.exports = YelpResults;
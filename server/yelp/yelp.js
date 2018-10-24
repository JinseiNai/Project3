require("dotenv").config();
const axios = require("axios")
class Yelp {
  
  search(params= {}) {
    return axios.get("/businesses/search", {
      baseURL: "https://api.yelp.com/v3",
      params,
      headers: {
        "Authorization": `Bearer ${process.env.YELPAPI}`,
        "Content-Type": "application/json"
      }
    }).then(result => result.data)
  }
}

module.exports = Yelp;
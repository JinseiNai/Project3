require("dotenv").config();
const axios = require("axios");
const yelpResults = require("../db/models/yelpResults")
class Yelp {
  // constructor({apiKey = ""}) {
  //   this.fetch = axios.create({
  //     baseURL: "https://api.yelp.com/v3",
  //   });

  //   // Alter defaults after instance has been created
  //   // this.fetch.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
  //   this.fetch.defaults.headers.common['Content-Type'] = "application/json";
  // }

  // search(params = {}) {
  //   console.log(params)
  //   return this.fetch("/businesses/search", { params })
  //     .then(yelp => console.log(yelp.data.businesses)
  //       // saving results to a database table to use
  //       // db.yelpResults.create()
  //     );

  // }

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
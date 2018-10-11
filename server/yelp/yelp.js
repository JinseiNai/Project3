const axios = require("axios");
const express = require("express");
const app = express();
class Yelp {
  constructor({apiKey = ""}) {
    this.fetch = axios.create({
      baseURL: "https://api.yelp.com/v3",
    });

    // Alter defaults after instance has been created
    this.fetch.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
    this.fetch.defaults.headers.common['Content-Type'] = "application/json";
  }

  search(params = {}) {
    console.log(params)
    return this.fetch("/businesses/search", { params })
      .then(yelp => yelp.data);

  }
}

// function YELPSEARCH() {
//   axios.get({
//     url: "https://api.yelp.com/v3/businesses/search?location=san diego, ca&categories=restaurants&sort_by=rating&radius=16094",
//     headers: {
//       "Authorization": process.env.apiKey,
//       "Content-Type": "application/json"
//     }
//   }).then(resultObj => res.send(resultObj))
// }


module.exports = Yelp;
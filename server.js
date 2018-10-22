if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const session = require('express-session')// const passport = require("passport");
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./server/db')
const passport = require("./server/passport");
const Yelp = require("./server/yelp/yelp")
const yelp = new Yelp({ apiKey: process.env.YELPAPI })
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// session store 
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)
// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser
// Add routes, both API and view
/* Express app ROUTING */
app.use('/auth', require('./server/auth'))
// app.use(routes);
app.get('/api/search', function (req, res) {
	//   var term = req.query.term;
	//   var location = req.query.location;
	// console.log(req)
	var categories = req.query.categories;
	var location = req.query.location;
	var limit = req.query.limit;
	var sort_by = req.query.sort_by;
	var radius = req.query.radius;
	var open_now = req.query.open_now
	console.log("running yelp search")

	if (!categories || !location) {
		res.json({
			error: 'You must include a term and a location!'
		});
	}

	yelp.search({ categories, location, limit, sort_by, radius, open_now })
		.then(data => {
			// return res.json(data);
			return res.json(data) 
		})
		.catch((e) => {
			console.error("Error", e);
		});
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GTFO");

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

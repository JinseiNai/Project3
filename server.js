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

const PORT = process.env.PORT || 3001;

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

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GTFO");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

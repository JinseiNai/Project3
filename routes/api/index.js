const router = require("express").Router();
const favoritesRoutes = require("./favorites");
const interestsRoutes = require("./interests")

// favorites routes
router.use("/favorites", favoritesRoutes);
router.use("/interests", interestsRoutes)

module.exports = router;

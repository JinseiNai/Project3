
const router = require("express").Router();
const favoritesRoutes = require("./favorites");



// favorites routes
router.use("/favorites", favoritesRoutes);



module.exports = router;

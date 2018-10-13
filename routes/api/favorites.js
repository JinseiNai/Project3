const router = require("express").Router();
const favoritesController = require("../../controllers/favoritesController");

// Matches with "/api/favorites"
router.route("/favorites")
  .get(favoritesController.findAll)
  .post(favoritesController.create);

// Matches with "/api/favorites/:id"
router
  .route("/favorites/:id")
  .get(favoritesController.findById)
  .put(favoritesController.update)
  .delete(favoritesController.remove);

module.exports = router;

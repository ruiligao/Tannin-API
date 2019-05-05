const router = require("express").Router();
const restaurantController = require("../../controllers/restaurantController");

//defining our root route or "/"
router.route("/")
  .get(restaurantController.findAll)
  .post(restaurantController.create);

router
  .route("/:id")
  .get(restaurantController.findById)
  .put(restaurantController.update)
  .delete(restaurantController.remove);

module.exports = router;
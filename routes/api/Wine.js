const router = require("express").Router();
const wineController = require("../../controllers/wineController");

//defining our root route or "/"
router.route("/")
  .get(wineController.findAll)
  .post(wineController.create);

router
  .route("/:id")
  .get(wineController.findById)
  .put(wineController.update)
  .delete(wineController.remove);

module.exports = router;
const router = require("express").Router();
const addwineController = require("../../controllers/addwineController");

//defining our root route or "/"
router.route("/")
.put(addwineController.update)


module.exports = router;
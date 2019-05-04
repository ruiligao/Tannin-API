const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('../../passport')

router.route("/signup")
.post(userController.signup);
router.route("/login") 
.post(passport.authenticate('local'), userController.login);

router.route("/logout") 
.post(userController.logout);
// router.route("/getUser")
// .get(userController.getUser);
//route: "/api/books/:id"
//get the read from db; put is update; delete is remove

module.exports = router;

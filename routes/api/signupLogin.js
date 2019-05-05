const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('../../passport')

router.route("/signup")
	.post(userController.signup);
// router.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
// 	  console.log("CHECK");
//     res.redirect('/admin');
//   });
// router.route("/login") 
// .post(passport.authenticate('local'), userController.login);
router.post(
	'/login',
	function (req, res, next) {
		console.log('================');
		console.log(req.body);
		console.log('================');
		next();
	},
	passport.authenticate('local'),(req, res) => {
		console.log("KKKK");
		console.log(req);
		console.log(res);

		const user = JSON.parse(JSON.stringify(req.user)); // hack
		const cleanUser = Object.assign({}, user);
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`);
			delete cleanUser.password;
			console.log(cleanUser);
		}
		res.json({ user: cleanUser })
		// successRedirect: '/',
		// failureRedirect: '/login',
		// //  failureFlash: true,
	}
)

router.route("/logout")
	.post(userController.logout);
// router.route("/getUser")
// .get(userController.getUser);
//route: "/api/books/:id"
//get the read from db; put is update; delete is remove

module.exports = router;

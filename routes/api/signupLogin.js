const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('../../passport');
const db = require("../../models");

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
// router.post('/login',(req,res) =>{
// 	console.log("LOGIN");
// 	console.log(req.body);
// 	db.Employees.findOne({email:req.body.email}).then((user)=>{
// if(user.password===req.body.password){
// 	res.json(user);
// }
// else {
// 	res.json("No User")
// }
// 	})
// })
	router.post('/login',passport.authenticate('local'),
(req, res) => {
	console.log("???????????????");
	console.log(user);
	console.log("???????????????");

		console.log(req);
		console.log(res);
		const user = JSON.parse(JSON.stringify(req.user)); // hack
		const cleanUser = Object.assign({}, user);
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`);
			delete cleanUser.password;
			console.log(cleanUser);
			console.log("KKKK");
			console.log(res.user);
		res.json({ user});
		console.log("KKKK1");
		}
	})
		// res.end("hello world\n");
		// }
	
		
		// successRedirect: '/',
		// failureRedirect: '/login',
		//  failureFlash: true,


router.route("/logout")
	.post(userController.logout);
// router.route("/getUser")
// .get(userController.getUser);
//route: "/api/books/:id"
//get the read from db; put is update; delete is remove

module.exports = router;

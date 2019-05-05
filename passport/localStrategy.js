const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	{
		usernameField: 'email',
    	passwordField: 'password'
	},
	function (email, password, done) {
		console.log("LocalStrategy: " + email);
		db.Employees.findOne({ email: email }, (err, userMatch) => {
			console.log("DB");
			console.log(err);
			console.log(userMatch);
			if (err) {
				return done(err);
			}
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect email' });
			}
			if (!userMatch.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' });
			}
			return done(null, userMatch);
		})
	}
)

module.exports = strategy

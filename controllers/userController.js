const express = require('express')
const router = express.Router()
const User = require('../models/Employees')
const Admin = require('../models/Restaurants')
const passport = require('../passport')
const db = require("../models");

module.exports = {
	// getUser: function (req, res, next) {
	// 	console.log('===== user!!======')
	// 	console.log(req.user)
	// 	if (req.user) {
	// 		return res.json({ user: req.user })
	// 	} else {
	// 		return res.json({ user: null })
	// 	}
	// },
	login: function (req, res) {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`)
			delete cleanUser.password
		}
		res.json({ user: cleanUser })
	},
	logout: function (req, res) {
		if (req.user) {
			req.session.destroy()
			res.clearCookie('connect.sid') // clean up!
			return res.json({ msg: 'logging you out' })
		} else {
			return res.json({ msg: 'no user to log out!' })
		}
	},
	signup: function (req, res) {
		const { restaurant, firstName, lastName, email, password } = req.body
		console.log(req.body);
		// ADD VALIDATION
		db.Restaurants.findOne({ email: email }, (err, userMatch) => {
			if (userMatch) {
				return res.json({
					error: `Sorry, already a user with the email: ${email}`
				})
			}
			const newAdmin = new Admin({
				restaurant: restaurant,
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password
			})
			newAdmin.save((err, savedAdmin) => {
				if (err) return res.json(err)
				return res.json(savedAdmin)
			})

			const newUser = new User({

				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
				isAdmin: true
			})
			newUser.save((err, saveUser) => {
				if (err) return res.json(err)
				return res.json(savedUser)
			})
		})
	}
}


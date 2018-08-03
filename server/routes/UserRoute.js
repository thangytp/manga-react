const express = require('express');
const crypto = require('crypto');
const app = express();
const UserRoute = express.Router();

// Require Post model in our routes module
let User = require('../models/User');

UserRoute.route('/test').get(function (req, res) {
	res.status(400).send('fail');
});

UserRoute.route('/add').post(async function (req, res) {
	console.log(`Add new user ${req.body.name}`);
	let name = req.body.name;
	let email = req.body.email;
	let password = req.body.password;
	// let {name, email, email} = {req.body.name, req.body.email, req.body.password};
	const {salt, hash} = saltHashPassword(password);

	//validate data
	if (!name || !email || !password) {
		// res.send
	}

	let userFind = await User.where({email: email}).fetch();
	return res.status(200).json(userFind);

	let user = new User({
		name,
		email,
		salt,
		encrypted_password: hash
	});
	user.save()
	.then(user => {
		res.status(200).json(user);
	})
	.catch(err => {
		res.status(400).send('Unable to create user');
	})
});

function saltHashPassword (password) {
	const salt = randomString();
	const hash = crypto.createHmac('sha512', salt).update(password);

	return {
		salt,
		hash: hash.digest('hex')
	}
}

function randomString () {
	return crypto.randomBytes(4).toString('hex');
}

module.exports = {
	UserRoute,
	saltHashPassword
};
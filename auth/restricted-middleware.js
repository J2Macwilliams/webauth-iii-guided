// const bcrypt = require('bcryptjs');

// const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
	const keyToken = req.headers;
	if (keyToken) {
		res.status(400).json({ message: 'There is no Token' });
	} else {
		let correctToken = jwt.verify(token, 'is it secret, is it safe?');

		if (correctToken) {
			next();
		} else {
			res.status(500).json({ message: 'There was an error with that token!' });
		}
	}
};

	// const { username, password } = req.headers;

	// if (username && password) {
	//   Users.findBy({ username })
	//     .first()
	//     .then(user => {
	//       if (user && bcrypt.compareSync(password, user.password)) {
	//         next();
	//       } else {
	//         res.status(401).json({ message: 'Invalid Credentials' });
	//       }
	//     })
	//     .catch(error => {
	//       res.status(500).json({ message: 'Ran into an unexpected error' });
	//     });
	// } else {
	//   res.status(400).json({ message: 'No credentials provided' });
	// }


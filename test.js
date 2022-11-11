const {Admin} = require('./index.js');

const database = new Admin({
	user: {
		user: "brayanbanner",
		contraseña: "keigocode123%%"
	},
	name: "keigocode.fdb"
});

console.log(database.start())
const {LocalStorage} = require('node-localstorage');
const cryptoJS = require('crypto-js');
const SHA256 = require('crypto-js/sha256');
const {encrypt, decrypt} = require('./utils/encrypt.js');
const nanoid = require('crypto-js/md5')

class Admin {
	constructor(settings={}){
		this.settings = {
			route: settings.route?settings.route:"./database",
			user: settings.user?settings.user:{
				user: "admin",
				password: "admin"
			},
			server: settings.server?settings.server:{
				active: false,
				port: 8080,
				log: true,
				api: false
			},
			name: settings.name?settings.name:"FortyDB.fdb"
		};
	}
	start(){
		if(typeof this.settings != "object") return new Error("The config object in the Administrator is invalid.");
		const manager = new LocalStorage(this.settings.route?this.settings.route:"./database");
		let findingDB = manager.getItem(this.settings.name?this.settings.name:"fortydb.fdb");

		let userEncrypt = SHA256(`@${this.settings.user.user}>>>${this.settings.user.password}`).toString();
		let finalEncrypt = encrypt(userEncrypt, {
			date: new Date().toString(),
			data: {
				simple: {},
				base: [],
				code: nanoid(new Date().toString()).toString(),
				files: {
					data: [],
					locals: false
				}
			}
		});

		if(!findingDB){
			manager.setItem(this.settings.name, finalEncrypt);

			return decrypt(userEncrypt, finalEncrypt);
		}else {
			return decrypt(userEncrypt, manager.getItem(this.settings.name));
		}
	}
	getData(name){
		return this.start().data.simple[name]?this.start().data.simple[name]:null;
	}
	setData(name, data){
		const manager = new LocalStorage(this.settings.route?this.settings.route:"./database");
		let finalData = this.start();
		let userEncrypt = SHA256(`@${this.settings.user.user}>>>${this.settings.user.password}`).toString();

		finalData.data.simple[name] = data;

		manager.setItem(this.settings.name, encrypt(userEncrypt, finalData))

		return finalData;
	}
}

module.exports = {
	Admin
}
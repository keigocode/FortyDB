# FortyDB (BETA)

A simple database for small projects or blogs. This database is completely local and is in beta phase.

## Functions

1. Starting Services
2. Get Data
	1. General Data
	2. Specifies
	3. Base Data (Coming Soon)
3. Set Data
	1. Simple Data
	2. File (Coming Soon)
	3. From Server (Coming Soon)
4. Server (Coming Soon)
5. User Service
6. Settings
7. Notes

### 1. Starting Services

Installing FortyDB on your project:

```
npm install fortydb
```

Once fortydb is installed in your project, call our services

```javascript
// ADMINISTRATOR OF DATABASE
const {Admin} = require('fortydb');

// DEFAULT SETTINGS VARIABLE
const database = new Admin();

// VARIABLE OF DATA FROM DATABASE
let data = database.start(); // THIS RETURN JSON OBJECT

console.log(data)



// OUTPUT
{
	date: "Date",
	data: {
		simple: {},
		base: [],
		code: "ASdjsakdfjaksjdljqi12983912",
		files: {
			data: [],
			locals: false
		}
	}
}
```

### Get Data

For get data is very simple

```javascript
// GET ALL DATA
let all_data = database.start();

// GET SPECIFIES DAT
let specificies_data = database.getData('name_of_data');

// BASE DATA IS COMING SOON ...
```

### Set Data

You can save any information such as: Strings, Objects, Arrays

```javascript
// SET DATA IN THE DATABASE
database.setData('name_of_data', 'data');
```

### User Service 

Users as such do not exist, but it is the way to connect directly to the database, if you forget the password or the user will lose all their information.

The user consists of a username and a password, in the end only with these two can open the database, each database depends only on these 2, there is no security code or any other service.

```javascript
// ADMINISTRATOR OF DATABASE
const {Admin} = require('fortydb');

// VARIABLE LOGIN
const database = new Admin({
	user: {
		user: "FortyDB",
		password: "Example123"
	}
});
```

### Settings 

```javascript
// ADMINISTRATOR OF DATABASE
{
	route: "./routeDatabaseFolder",
	user: {
		user: "admin",
		password: "admin"
	}
	name: "name_of_database.fdb"
};
```

### Notes 

- The database is in beta phase therefore it only has basic functions. We are currently at version 0.0.1

- The database is not recommended to be used for large or highly confidential projects since the database does not have good security.
But it is fully functional if the case is that you want to save info for your application or blog. Or simply for a web app where there is a login and user registration.

- For greater stability and speed, an advanced mode will be added in which each data has a very specific space on the disk
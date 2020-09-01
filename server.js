// app.js
const express = require('express');
const bodyParser = require('body-parser');// initialize our express app
const app = express();

// const db = require('./db'); // Imports routes for the products

app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());

//cross platform
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

// ROUTING
const product = require('./routers/product.route'); // Imports routes for the products
app.use('/products', product);


// SERVER CONNECT
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
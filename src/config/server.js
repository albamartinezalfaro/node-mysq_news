const path = require('path');
const express = require('express');
//const bodyParser = require('body-parser'); //middlewares

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// middlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({extended: false}))
//app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../static')))

module.exports = app;
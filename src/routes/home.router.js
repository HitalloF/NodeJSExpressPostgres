const express = require('express')
const route = express.Router();
     
const controller = require('../controllers/home.controller')


route.get('/', controller.get)

module.exports = route
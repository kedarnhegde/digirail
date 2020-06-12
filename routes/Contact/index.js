const usercontact = require('express').Router();
const contact = require('./contact')

usercontact.post('/', contact);

module.exports = usercontact;
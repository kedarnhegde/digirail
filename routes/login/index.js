const userlogin = require('express').Router();
const login = require('./login')

userlogin.post('/', login);

module.exports = userlogin;
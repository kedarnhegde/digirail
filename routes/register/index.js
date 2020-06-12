const userregister = require('express').Router();
const register = require('./register')

userregister.post('/', register);

module.exports = userregister;
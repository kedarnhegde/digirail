const users = require('express').Router();
const _user = require('./users');
const singleuser = require('./userapi');

users.get('/', _user);
users.get('/:username', singleuser)

module.exports = users;
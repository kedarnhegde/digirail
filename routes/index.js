const routes = require('express').Router();
const users = require('./users');
const register = require('./register');
const login = require('./login');
const dashboard = require('./dashboard');
const contact = require('./contact');



routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/users', users);
routes.use('/register', register);
routes.use('/login',login);
routes.use('/dashboard',dashboard);
routes.use('/contact',contact);



module.exports = routes;
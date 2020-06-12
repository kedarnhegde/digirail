const userinput = require('express').Router();
const dashboard = require('./dashboard')

userinput.post('/', dashboard);
userinput.get('/',dashboard);
module.exports = userinput;
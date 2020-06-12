// Bring in our dependencies
const app = require('express')();
const routes = require('./routes');
var cors = require('cors')
const bodyParser = require('body-parser')

app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )

app.use(bodyParser.json())

app.use(cors())

//  Connect all our routes to our application
app.use('/', routes);

// Turn on that server!
app.listen(9000, () => {
  console.log('App listening on port 9000');
});
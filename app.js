let express = require('express');
// require controller module stored into variable
let todoController = require('./controllers/todoController');
let app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files using middleware
app.use(express.static('./public'));

// fire controller function passing app variable as parameter
todoController(app);

// listen to port
app.listen(3000);
console.log('listening to port 3000');

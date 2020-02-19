// controller to handle routes, rendering of views, and passing of data to views
// app being passed into module allowing use of app.get, app.post, etc.

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended:false});

let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'finish book'}];

module.exports = function(app) {

    app.get('/todo', function(request, response) {
        response.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(request, response){
        // add data from form to data array
        data.push(request.body);
        response.json(data);
    });

    app.delete('/todo', function(request, response){

    });

};
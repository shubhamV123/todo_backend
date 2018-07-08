var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser')
  cors = require('cors');

//mongodb://localhost/Tododb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test12@ds131711.mlab.com:31711/todo_v1');

app.use(cors()) 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');
routes(app);
console.log("routes",routes(app))
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
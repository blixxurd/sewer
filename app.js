// libs
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Config Loader
const config_file = process.env.NODE_ENV == 'production' ? 'config.prod.js' : 'config.dev.js';
const config = require('./app/config/' + config_file);

// Mongoose Setup
const mongoose = require('mongoose');
      mongoose.Promise = global.Promise;

mongoose.connect(config.mongo.url , { useNewUrlParser: true }).then(() => {
    console.log(`Successfully connected to ${config.mongo.url}`);    
}).catch(err => {
    console.log(`ERROR: Could not connect to ${config.mongo.url}`);
    process.exit();
});

// Routes
const indexRouter = require('./app/routes/index');
const crudRouter = require('./app/routes/crud')(mongoose, config);

// Set up App
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', crudRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

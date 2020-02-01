var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./models/index');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accountsRouter = require('./routes/accounts');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/accounts', accountsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`server started on https://localhost:${process.env.PORT}`));
  })
  .catch(error => {
    console.log('Error connecting to DB', error);
  });


module.exports = app;

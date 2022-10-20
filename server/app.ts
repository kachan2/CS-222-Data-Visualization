import express, { ErrorRequestHandler } from "express";

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
const hbs = 'hbs';
app.engine(hbs, require('express-handlebars').engine({'extname': hbs}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// define routers
app.use(require('./routes/map'));

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(((err, req, res) => {
  console.log("Error!");
  console.log(err);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
}) as ErrorRequestHandler);

module.exports = app;
export{app};
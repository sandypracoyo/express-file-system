require('dotenv').config({ path: ".env" })

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const parser = require('body-parser')
const port = process.env.PORT || 5000

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: "Oops page not found"
    })
})

app.listen(port, () => console.log(`Server is running in port ${port}`))
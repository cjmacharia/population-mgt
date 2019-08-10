"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _location = _interopRequireDefault(require("./routes/location"));

require('dotenv').config();

var app = (0, _express.default)();
app.use(_bodyParser.default.json());
(0, _location.default)(app); // dbUrl = `mongodb://${process.env.TEST_USER}:${process.env.TEST_PASSWORD}${process.env.TEST_HOST}/${process.env.TEST_NAME}`;

if (process.env.NODE_ENV === 'development') {
  var dbUrl = "mongodb://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASSWORD).concat(process.env.DB_HOST, "/").concat(process.env.DB_NAME);

  _mongoose.default.connect(dbUrl, {
    useNewUrlParser: true
  }).then(function () {
    return console.log('connected');
  }).catch(function (err) {
    return console.log(err);
  });

  app.listen(3030, function () {
    console.log('server is up');
  });
}

var _default = app;
exports.default = _default;
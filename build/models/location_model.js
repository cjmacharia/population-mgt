"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));

var _subLocation_model = _interopRequireDefault(require("./subLocation_model"));

var Schema = _mongoose.default.Schema;
var locationSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true,
    required: [true, 'your location name field cannot be blank']
  },
  female: {
    type: Number
  },
  male: {
    type: Number
  },
  population: {
    type: Number
  },
  sublocation: [_subLocation_model.default],
  updateAt: {
    type: Date,
    default: new Date()
  }
});

var Location = _mongoose.default.model('Location', locationSchema);

locationSchema.plugin(_mongooseUniqueValidator.default, {
  message: 'expected {PATH} to be unique.'
});
var _default = Location;
exports.default = _default;
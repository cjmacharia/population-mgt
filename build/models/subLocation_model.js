"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose.default.Schema;
var subLocationSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, 'your sublocation name field cannot be blank']
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
  updateAt: {
    type: Date,
    default: new Date()
  }
});
var _default = subLocationSchema;
exports.default = _default;
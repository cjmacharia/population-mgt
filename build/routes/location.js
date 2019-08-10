"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var controller = _interopRequireWildcard(require("../controllers/location"));

var _default = function _default(app) {
  app.post('/location', controller.createLocation);
  app.get('/locations', controller.getLocations);
  app.get('/location/:id', controller.getOneLocations);
  app.put('/location/:id', controller.editLocation);
  app.delete('/location/:id', controller.deleteContact);
};

exports.default = _default;
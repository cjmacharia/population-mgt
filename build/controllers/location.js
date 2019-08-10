"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteContact = exports.editLocation = exports.getOneLocations = exports.getLocations = exports.createLocation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _location_model = _interopRequireDefault(require("../models/location_model"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var utils = _interopRequireWildcard(require("../utils/locationSub_utils"));

var queries = _interopRequireWildcard(require("../utils/queries"));

var response = _interopRequireWildcard(require("../utils/responses"));

var createLocation =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    var population, SubPopulation, newLocation;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return utils.LocationValidator(req);

          case 3:
            population = _context.sent;
            _context.next = 6;
            return utils.subLocationPopulation(req);

          case 6:
            SubPopulation = _context.sent;
            newLocation = new _location_model.default({
              _id: new _mongoose.default.Types.ObjectId(),
              name: req.body.name,
              male: req.body.male,
              female: req.body.female,
              population: population,
              sublocation: {
                name: req.body.sublocation.name,
                male: req.body.sublocation.male,
                female: req.body.sublocation.female,
                population: SubPopulation
              }
            });
            _context.next = 10;
            return queries.saveLocation(res, newLocation);

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            response.locationDetailsError(res, _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 12]]);
  }));

  return function createLocation(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createLocation = createLocation;

var getLocations =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return queries.getLocations(res);

          case 3:
            _context2.next = 8;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
            response.serverError(res, _context2.t0);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 5]]);
  }));

  return function getLocations(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getLocations = getLocations;

var getOneLocations =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(req, res) {
    var id;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return utils.verifyId(id);

          case 4:
            _context3.next = 6;
            return queries.getLocationById(res, id);

          case 6:
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);

            if (_context3.t0 instanceof TypeError) {
              response.invalidIdError(res);
            } else {
              response.serverError(res, _context3.t0);
            }

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 8]]);
  }));

  return function getOneLocations(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneLocations = getOneLocations;

var editLocation =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(req, res) {
    var id, location;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return utils.verifyId(id);

          case 4:
            _context4.next = 6;
            return utils.LocationValidator(req);

          case 6:
            req.body.population = _context4.sent;
            _context4.next = 9;
            return utils.subLocationPopulation(req);

          case 9:
            req.body.sublocation.population = _context4.sent;
            location = {
              data: req.body
            };
            _context4.next = 13;
            return queries.editLocation(res, id, location);

          case 13:
            _context4.next = 18;
            break;

          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](1);

            if (_context4.t0 instanceof TypeError) {
              response.invalidIdError(res);
            } else {
              response.serverError(res, _context4.t0);
            }

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[1, 15]]);
  }));

  return function editLocation(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.editLocation = editLocation;

var deleteContact =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(req, res) {
    var id;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return utils.verifyId(id);

          case 4:
            _context5.next = 6;
            return queries.deleteContact(res, id);

          case 6:
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);

            if (_context5.t0 instanceof TypeError) {
              response.invalidIdError(res);
            } else {
              response.serverError(res, _context5.t0);
            }

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[1, 8]]);
  }));

  return function deleteContact(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteContact = deleteContact;
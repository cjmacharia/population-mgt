"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteContact = exports.editLocation = exports.getLocationById = exports.getLocations = exports.saveLocation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var response = _interopRequireWildcard(require("./responses"));

var _location_model = _interopRequireDefault(require("../models/location_model"));

var saveLocation = function saveLocation(res, location) {
  location.save(function (err) {
    if (err) {
      err.name ? response.validationError(res, err) : response.serverError(res);
    } else {
      response.creationSuccess(res, location);
    }
  });
};

exports.saveLocation = saveLocation;

var getLocations =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(res) {
    var locations;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _location_model.default.find({});

          case 2:
            locations = _context.sent;
            response.getResultsSuccess(res, locations);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getLocations(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getLocations = getLocations;

var getLocationById =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(res, id) {
    var locations;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _location_model.default.find({
              _id: id
            });

          case 2:
            locations = _context2.sent;
            response.getResultsSuccess(res, locations);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getLocationById(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getLocationById = getLocationById;

var editLocation =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(res, id, data) {
    var location;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _location_model.default.findByIdAndUpdate(id, data.data, {
              new: true
            });

          case 2:
            location = _context3.sent;
            response.updateSuccess(res, location);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function editLocation(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.editLocation = editLocation;

var deleteContact =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(res, id) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _location_model.default.findByIdAndDelete(id);

          case 2:
            response.successfullResponse(res);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function deleteContact(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteContact = deleteContact;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationValidator = exports.subLocationPopulation = exports.verifyId = void 0;
var subMale;
var subFemales;

var verifyId = function verifyId(id) {
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    return id;
  } else {
    throw new TypeError();
  }
};

exports.verifyId = verifyId;

var subLocationPopulation = function subLocationPopulation(req) {
  subMale = req.body.sublocation.male;
  subFemales = req.body.sublocation.female;
  return new Promise(function (resolve, reject) {
    if (Number.isInteger(subMale) && Number.isInteger(subFemales)) {
      return resolve(subMale + subFemales);
    } else {
      return reject('males and females should be numbers');
    }
  });
};

exports.subLocationPopulation = subLocationPopulation;

var LocationValidator = function LocationValidator(req) {
  var location = req.body.name;
  var males = req.body.male;
  var females = req.body.female;

  if (req.body.sublocation !== undefined) {
    subMale = req.body.sublocation.male;
    subFemales = req.body.sublocation.female;
  }

  return new Promise(function (resolve, reject) {
    location = location.replace(/^\s+/g, '');

    if (!location) {
      return reject('this cannot be an empty string');
    }

    if (Number.isInteger(males) && Number.isInteger(females)) {
      if (subMale > males || subFemales > females) {
        return reject('sublocation cannot have alot more people than the location');
      } else {
        return resolve(males + females);
      }
    } else {
      return reject('the number of males and females must be intergers');
    }
  });
};

exports.LocationValidator = LocationValidator;
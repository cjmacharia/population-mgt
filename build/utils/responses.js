"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nothingFound = exports.invalidIdError = exports.serverError = exports.successfullResponse = exports.getResultsSuccess = exports.NotFoundError = exports.locationDetailsError = exports.validationError = exports.updateSuccess = exports.creationSuccess = void 0;

var creationSuccess = function creationSuccess(response, data) {
  response.status(201).json({
    message: 'successfully created',
    data: data
  });
};

exports.creationSuccess = creationSuccess;

var updateSuccess = function updateSuccess(response, data) {
  response.status(200).json({
    message: 'successfully updated',
    data: data
  });
};

exports.updateSuccess = updateSuccess;

var validationError = function validationError(res, err) {
  res.status(403).json({
    error: err.message
  });
};

exports.validationError = validationError;

var locationDetailsError = function locationDetailsError(res, err) {
  res.status(403).json({
    error: err
  });
};

exports.locationDetailsError = locationDetailsError;

var NotFoundError = function NotFoundError(res, err) {
  res.status(404).json({
    error: err.message
  });
};

exports.NotFoundError = NotFoundError;

var getResultsSuccess = function getResultsSuccess(res, results) {
  res.status(200).json({
    data: results
  });
};

exports.getResultsSuccess = getResultsSuccess;

var successfullResponse = function successfullResponse(res) {
  res.status(200).json({
    message: 'operation successfull'
  });
};

exports.successfullResponse = successfullResponse;

var serverError = function serverError(res) {
  res.status(500).json({
    error: 'Server error'
  });
};

exports.serverError = serverError;

var invalidIdError = function invalidIdError(res) {
  res.status(404).json({
    err: 'that Id is Invalid'
  });
};

exports.invalidIdError = invalidIdError;

var nothingFound = function nothingFound(res, err) {
  res.status(404).json({
    error: err
  });
};

exports.nothingFound = nothingFound;
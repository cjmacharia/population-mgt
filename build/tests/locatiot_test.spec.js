"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("../index"));

var _http = _interopRequireDefault(require("http"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

describe('test the location functionalities', function () {
  var id; // let port= 3000;
  // let server;
  // let request;

  var location = {
    name: 'Nairobi',
    male: 900,
    female: 1000,
    sublocation: {
      name: 'sublocation',
      male: 3,
      female: 30
    }
  };
  beforeAll(function (done) {
    jest.setTimeout(10000);

    _mongoose.default.connection.dropDatabase();

    _mongoose.default.connect("mongodb://".concat(process.env.TEST_USER, ":").concat(process.env.TEST_PASSWORD).concat(process.env.TEST_HOST, "/").concat(process.env.TEST_NAME), {
      useNewUrlParser: true
    });

    done();
  });
  afterAll(function (done) {
    _mongoose.default.connection.close();

    server.close();
    done();
  });
  it('it should create a location', function () {
    return (0, _supertest.default)(_index.default).post('/location').send(location).expect(201).then(function (res) {
      id = res.body.data._id;
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toBe('successfully created');
      expect(res.body.data.name).toEqual('Nairobi');
      expect(res.body.data.male).toEqual(900);
      expect(res.body.data.population).toEqual(1900);
    });
  });
  it('it should fail to create a location with same name', function () {
    return (0, _supertest.default)(_index.default).post('/location').send(location).expect(403).then(function (res) {
      expect(res.body.error).toBe('Location validation failed: name: expected name to be unique.');
    });
  });
  it('it should returns all the locations', function () {
    return (0, _supertest.default)(_index.default).get('/locations').expect(200).then(function (res) {
      expect(res.body).toBeInstanceOf(Object);
    });
  });
  it('it should returns one locations', function () {
    return (0, _supertest.default)(_index.default).get("/location/".concat(id)).expect(200).then(function (res) {
      expect(res.body).toBeInstanceOf(Object);
    });
  });
  it('it should edit a location ', function () {
    var location = {
      name: 'Nairobi',
      male: 1000,
      female: 1500,
      sublocation: {
        name: 'sublocation',
        male: 20,
        female: 100
      }
    };
    return (0, _supertest.default)(_index.default).put("/location/".concat(id)).send(location).expect(200).then(function (res) {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.message).toBe('successfully updated');
      expect(res.body.data.population).toEqual(2500);
    });
  });
  it('it should delete a locations', function () {
    return (0, _supertest.default)(_index.default).delete("/location/".concat(id)).expect(200).then(function (res) {
      expect(res.body.message).toBe('operation successfull');
    });
  });
  it('it should fail to check if the id is invalid', function () {
    return (0, _supertest.default)(_index.default).get('/location/75934893').expect(404).then(function (res) {
      expect(res.body.err).toBe('that Id is Invalid');
    });
  });
  it('it should fail to add  a location if the male or female values are not numbers', function () {
    var location = {
      name: 'Nairobi',
      male: 'you',
      female: 1500
    };
    return (0, _supertest.default)(_index.default).post('/location').send(location).expect(403).then(function (res) {
      expect(res.body.error).toBe('the number of males and females must be intergers');
    });
  });
  it('it should fail to add  a location if the name value is empty', function (done) {
    var location = {
      name: ' ',
      male: 800,
      female: 1500
    };
    return (0, _supertest.default)(_index.default).post('/location').send(location).expect(403).then(function (res) {
      expect(res.body.error).toBe('this cannot be an empty string');
      done();
    });
  });
});
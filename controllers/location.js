import Location from '../models/location_model';
import  mongoose from 'mongoose';
import * as utils from '../utils/location_utils';
import * as queries from '../utils/queries';
import * as response from '../utils/responses';


export const createLocation = async(req, res) => {
  try {
    let population = await utils.validator(req);
    const newLocation = new Location({
      _id:  new mongoose.Types.ObjectId(),
      name: req.body.name,
      male: req.body.male,
      female: req.body.female,
      population: population
    });
    await queries.saveLocation(res, newLocation);
  } catch(err) {
    response.locationDetailsError(res, err);
  }
};

export const getLocations = async (req, res) => {
  try {
  await queries.getLocations(res);
  } catch(err) {
    response.serverError(res, err);
  }
};
export const getOneLocations = async (req, res) => {
  let id = req.params.id;
  try {
  await utils.verifyId(id);
  await queries.getLocationById(res, id);
  } catch(err) {
    if( err instanceof TypeError) {
      response.invalidIdError(res);
    } else {
    response.serverError(res, err);
    }
  }
};


export const editLocation = async(req, res) => {
  let id = req.params.id;
  try {
    await utils.verifyId(id);
    let population = await utils.validator(req);
    let location = {data: req.body, population: population};
    await queries.editLocation(res, id, location);
  } catch(err) {
    if( err instanceof TypeError) {
      response.invalidIdError(res);
    } else {
    response.serverError(res, err);
    }
  }
};

export const deleteContact = async (req, res) => {
  let id = req.params.id;
  try {
    await utils.verifyId(id);
    await queries.deleteContact(res, id);

  } catch(err) {
    if( err instanceof TypeError) {
      response.invalidIdError(res);
    } else {
    response.serverError(res, err);
    }
  }
};

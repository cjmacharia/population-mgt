import Location from '../models/location_model';
import  mongoose from 'mongoose';
import * as utils from '../utils/locationSub_utils';
import * as queries from '../utils/queries';
import * as response from '../utils/responses';

export const createLocation = async(req, res) => {
  try {
    let population = await utils.LocationValidator(req);
    let SubPopulation = await utils.subLocationPopulation(req);
    const newLocation = new Location({
      _id:  new mongoose.Types.ObjectId(),
      name: req.body.name,
      male: req.body.male,
      female: req.body.female,
      population: population,
      sublocation: {
        name: req.body.sublocation.name,
        male: req.body.sublocation.male,
        female: req.body.sublocation.female,
        population: SubPopulation,
      },

    });
    await queries.saveLocation(res, newLocation);
  } catch (err) {
    response.locationDetailsError(res, err);
  }
};

export const getLocations = async (req, res) => {
  try {
    await queries.getLocations(res);
  } catch (err) {
    response.serverError(res, err);
  }
};

export const getOneLocations = async (req, res) => {
  let id = req.params.id;
  try {
    await utils.verifyId(id);
    await queries.getLocationById(res, id);
  } catch (err) {
    if (err instanceof TypeError) {
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
     req.body.population = await utils.LocationValidator(req);
    req.body.sublocation.population = await utils.subLocationPopulation(req);

    let location = { data: req.body };
    await queries.editLocation(res, id, location);
  } catch (err) {
    if (err instanceof TypeError) {
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

  } catch (err) {
    if (err instanceof TypeError) {
      response.invalidIdError(res);
    } else {
      response.serverError(res, err);
    }
  }
};

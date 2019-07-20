import * as response from './responses';
import Location from '../models/location_model';
export const saveLocation = (res, location) => {
  location.save(err => {
    if (err) {
      (err.name)? response.validationError(res, err):
        response.serverError(res);
    } else {
    response.creationSuccess(res, location);
    }
  });
};

export const getLocations = async (res) => {
   let locations = await Location.find({});
   response.getResultsSuccess(res, locations);
};

export const getLocationById = async (res, id) => {
  let locations = await Location.find({_id:id});
  response.getResultsSuccess(res, locations);
};

export const editLocation = async (res, id, data) => {
  let location = await Location.findByIdAndUpdate(id , data, {new: true});
  response.updateSuccess(res, location);
};

export const deleteContact = async(res, id) => {
  await Location.findByIdAndDelete(id);
  response.successfullResponse(res);
};
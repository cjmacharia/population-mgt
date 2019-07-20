
import * as controller from '../controllers/location';
export default (app) => {
app.post('/location', controller.createLocation);
app.get('/locations', controller.getLocations);
app.get('/location/:id', controller.getOneLocations);
app.put('/location/:id', controller.editLocation);
app.delete('/location/:id', controller.deleteContact);

};
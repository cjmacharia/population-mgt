import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const Schema = mongoose.Schema;
import subLocationSchema from './subLocation_model';
const locationSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true,
    required: [true, 'your location name field cannot be blank',]},
  female: {
    type: Number,
	},

  male: {
    type: Number,
	},
  population: {
    type: Number,
	},
  sublocation: [subLocationSchema],
  updateAt: {
    type: Date,
    default: new Date(),
  },
});

const Location = mongoose.model('Location', locationSchema);
locationSchema.plugin(uniqueValidator, { message: 'expected {PATH} to be unique.' });
export default Location;

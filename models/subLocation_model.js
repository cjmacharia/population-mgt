import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const subLocationSchema = new Schema({
	_id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, 'your sublocation name field cannot be blank',]},
  female: {
    type: Number,
	},

  male: {
    type: Number,
	},
  population: {
    type: Number,
	},
  updateAt: {
    type: Date,
    default: new Date(),
  },
})

export  default subLocationSchema;

require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import locationRoutes from './routes/location';
const app = express();
const PORT = process.env.PORT || 3030;
app.use(bodyParser.json());
locationRoutes(app);
console.log(process.env)
  // dbUrl = `mongodb://${process.env.TEST_USER}:${process.env.TEST_PASSWORD}${process.env.TEST_HOST}/${process.env.TEST_NAME}`;
  if (process.env.NODE_ENV === 'production') {
    console.log('cjmash')
    let dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_HOST}/${process.env.DB_NAME}`;


    mongoose.connect(dbUrl,{ 
    useNewUrlParser: true }).then(() => console.log('connected')).catch((err) => console.log(err));

}
app.listen(PORT, () => {
  console.log('server is up');
});
export default app;

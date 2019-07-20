require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import locationRoutes from './routes/location';
const app = express();
app.use(bodyParser.json());
locationRoutes(app);
  // dbUrl = `mongodb://${process.env.TEST_USER}:${process.env.TEST_PASSWORD}${process.env.TEST_HOST}/${process.env.TEST_NAME}`;
  if (process.env.NODE_ENV === 'development') {
    let dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_HOST}/${process.env.DB_NAME}`;

    mongoose.connect(dbUrl,{ 
    useNewUrlParser: true }).then(() => console.log('connected')).catch((err) => console.log(err));
    
app.listen(3030, () => {
  console.log('server is up');
});
}
export default app;
import request from 'supertest';
import app from '../index';
import http from 'http';
import mongoose, { Mongoose } from'mongoose';
describe('test the location functionalities', () => {
  let id;
  // let port= 3000;
  // let server;
  // let request;
  let location = {
    name: 'Nairobi',
    male: 900,
    female: 1000,
    sublocation : {
        name: 'sublocation',
        male: 3,
        female: 30
    }
  };

  beforeAll( (done) => {
      jest.setTimeout(10000);
    mongoose.connection.dropDatabase();
    mongoose.connect(`mongodb://${process.env.TEST_USER}:${process.env.TEST_PASSWORD}${process.env.TEST_HOST}/${process.env.TEST_NAME}`, {useNewUrlParser: true });
    done();
});
afterAll((done) => {
mongoose.connection.close();
  server.close();
  done();
})
it('it should create a location', () => {
    return request(app).post('/location')
        .send(location)
        .expect(201)
        .then(res => {
            id = res.body.data._id;
            expect(res.body).toBeInstanceOf(Object);
            expect(res.body.message).toBe('successfully created');
            expect(res.body.data.name).toEqual('Nairobi');
            expect(res.body.data.male).toEqual(900);
            expect(res.body.data.population).toEqual(1900);
        });
})
  it('it should fail to create a location with same name', () => {
    return request(app).post('/location')
    .send(location)
    .expect(403)
      .then(res => {
        expect(res.body.error).toBe('Location validation failed: name: expected name to be unique.');
      });
    });
  it('it should returns all the locations', () => {
  return request(app).get('/locations')
  .expect(200)
    .then(res => {
      expect(res.body).toBeInstanceOf(Object);
    });
  });
  it('it should returns one locations', () => {
    return request(app).get(`/location/${id}`)
    .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Object);
      });
    });
  it('it should edit a location ', () => {
    let location = {
      name: 'Nairobi',
      male: 1000,
      female: 1500,
      sublocation: {
          name: 'sublocation',
          male:20,
          female:100
      }
    }
    return request(app).put(`/location/${id}`)
    .send(location)
    .expect(200)
      .then(res => {
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.message).toBe('successfully updated');
        expect(res.body.data.population).toEqual(2500);
      });
      
    });

    it('it should delete a locations', () => {
      return request(app).delete(`/location/${id}`)
      .expect(200)
        .then(res => {
          expect(res.body.message).toBe('operation successfull');
        });
      });
      it('it should fail to check if the id is invalid', () => {
        return request(app).get('/location/75934893')
        .expect(404)
          .then(res => {
            expect(res.body.err).toBe('that Id is Invalid');
        });
      });
      it('it should fail to add  a location if the male or female values are not numbers', () => {
        let location = {
          name: 'Nairobi',
          male: 'you',
          female: 1500
        };
        return request(app).post('/location')
        .send(location)
        .expect(403)
          .then(res => {
            expect(res.body.error).toBe('the number of males and females must be intergers');
          });
          
        });

        it('it should fail to add  a location if the name value is empty', (done) => {
          let location = {
            name: ' ',
            male: 800,
            female: 1500
          };
          return request(app).post('/location')
          .send(location)
          .expect(403)
            .then(res => {
              expect(res.body.error).toBe('this cannot be an empty string');
              done();
            });
            
          });  

});

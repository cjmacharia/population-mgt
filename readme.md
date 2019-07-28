[![Coverage Status](https://coveralls.io/repos/github/cjmash/population-mgt/badge.svg?branch=master)](https://coveralls.io/github/cjmash/population-mgt?branch=master)

[![CircleCI](https://circleci.com/gh/cjmash/population-mgt.svg?style=svg)](https://circleci.com/gh/cjmash/population-mgt)

Population management system api
Dependencies
This is a node.js app that depends on the following technologies.

Express.js: A fast, opinionated, minimalist web framework for node which was used in routing this application.

BodyParser: This module was used to collect search data sent from the client side to the routing page.

MongoDB: A NOSQL document-driven database

Mongoose: A schema-based solution to model your application data

Installation
Navigate to the directory you want it installed to. cd your folder
Clone the repository https://github.com/cjmash/population-mgt.git
Create an account, users and databases on Mlab
Navigate the population-mgt folder.
Create a .env file using the .env.default as a guide.
npm install to install all dependencies.
npm start - The app runs on port 3030
npm test runs all the tests.
Endpoints
EndPoint	Functionality

| url Endpoint          |  http requests|               |
|-----------------------| --------------|---------------|
| /location/	        | POST   | Create a new location |                 |
| /locations            | GET    | Get all locations  |
| /location/:locationId | GET    | 	Get a single location|
| /location/:locationId	|Update  | Update a location|
| /location/:locationId	| DELETE | Delete a specific location|

the sublocation fields are optional
``````
POST a location /location
Request
{
    "name": "Nairobi",
    "male": 5,
    "female": 25,
    "sublocation": {
    name: "rongai",
    "male": 1,
    "female": 20
    }
}
Response
{
    "message": "successfully created",
    "data": {
        "updateAt": "2019-07-28T22:40:33.081Z",
        "_id": "5d3e26f8cb49be3aea943d9f",
        "name": "nairobi",
        "male": 5,
        "female": 25,
        "population": 30,
        "sublocation": [
            {
                "updateAt": "2019-07-28T22:40:33.079Z",
                "name": "rongai",
                "male": 1,
                "female": 20,
                "population": 21
            }
        ],
        "__v": 0
    }
}
GET all locations /locations/
Response
{
    "data": [
        {
            "updateAt": "2019-07-28T22:40:33.081Z",
            "_id": "5c596acb17eaf24615962fd3",
            "name": "Nairobii",
            "male": 508,
            "female": 900,
            "population": 1408,
            "__v": 0,
            "sublocation": []
        },
        {
        "updateAt": "2019-07-28T18:39:20.229Z",
        "_id": "5d3debf5303ef12822c4961c",
        "name": "loc",
        "male": 22,
        "female": 20,
        "population": 42,
        "sublocation": [
            {
            "updateAt": "2019-07-28T18:39:20.226Z",
            "location": [],
            "name": "loc",
            "male": 22,
            "female": 20,
            "population": 42
        }
            ],
       }
    ]
},
                        
        
 }
GET a location /location/:locationId
Response
{
    "data": [
        {
            "updateAt": "2019-07-28T22:40:33.081Z",
            "_id": "5c596acb17eaf24615962fd3",
            "name": "Nairobii",
            "male": 508,
            "female": 900,
            "population": 1408,
            "__v": 0,
            "sublocation": []
        }
    ]
}
PUT a location /api/location/:locationId
Request
{"male": 400}
Response
{
    "data": [
        {
            "updateAt": "2019-07-28T22:40:33.081Z",
            "_id": "5c596acb17eaf24615962fd3",
            "name": "Nairobii",
            "male": 400,
            "female": 900,
            "population": 1300,
            "__v": 0,
            "sublocation": []
        }
    ]
}
DELETE a location /api/location/:locationId
Response
status code 200
{
    "message": "delete operation successful"
}
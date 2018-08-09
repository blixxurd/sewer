# Sewer

A lightweight CRUD interface which allows you to dump any data set into a Mongo DB for retrieval or modification later.

It's basically a personal data lake that you can CRUD on. Sewage. Get it? Funny stuff. 

## Dev Setup
* Make sure Mongo is running. (Dev app listens on mongodb://localhost:27017/sewage)
* `npm install`
* `npm run start:dev`
* App should accept connections on port 3000.

## Adding / Modifying Data
* Any set of data can be added through a POST request to `/api/:setName`
  * :setName can be whatever you choose. This allows you to add as many data sets as you want.
  * The ID of the new content will be returned.
* To retrieve a data point within a set, send a GET request to `/api/:setName/:id`
  * :id represents the ID of your data within the set
* To retrieve a collection of all data, send a GET request to `/api/:setName`
* To delete an item, send a DELETE request to `/api/:setName/:id`
  * :id represents the ID of your data within the set
* To update an item, send a PUT request to `/api/:setName/:id`
  * :id represents the ID of your data within the set

## Prod Tips
* Production config uses the `MONGO_URL` environment var. Make sure this is set.
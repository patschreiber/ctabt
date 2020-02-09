require('dotenv').load();
const express = require('express');
const bt = require('./cta_bus_tracker_api');

const app = express();
const port = 3030;


app.get('/', (req, res) => res.send('Hello World!'));

/*
 * Route to DEMO the API call to a REST API Endpoint
 * REST URL : https://jsonplaceholder.typicode.com/todos/1
 */
app.get('/bus', (req, res) => {
  bt.fetch('/gettime')
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

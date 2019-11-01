/* eslint-disable no-console */
// My ?routing? api to avoid CORS

const express = require('express');
const fetch = require('node-fetch');

const app = express();
const randomBadMovie = require('./badmovies.js');
const randomGoodMovie = require('./goodmovies.js');
const randomGreatMovie = require('./greatmovies.js');


const port = 8080;
const url = 'http://www.omdbapi.com/?apikey=f9ca55de&i=tt';


app.use(express.static('public'));

app.get('/api/movies/bad', (req, res) => {
  fetch(url + encodeURI(randomBadMovie.randomBadMovie()))
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/api/movies/good', (req, res) => {
  fetch(url + encodeURI(randomGoodMovie.randomGoodMovie()))
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/api/movies/great', (req, res) => {
  fetch(url + encodeURI(randomGreatMovie.randomGreatMovie()))
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

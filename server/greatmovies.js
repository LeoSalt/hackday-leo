const greatMovies = [
  '0106489', '1375666', '0816692', '0120815', '0133093', '0120737',
  '0137523', '0120689', '0111161', '0468569',
];
const randomMovieID = () => Math.floor((Math.random() * Number(greatMovies.length)));
const randomGreatMovie = () => greatMovies[randomMovieID()];

module.exports.randomGreatMovie = randomGreatMovie;

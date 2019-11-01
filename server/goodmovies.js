const goodMovies = [
  '0313911', '0358349', '0287717', '0349205', '1190080', '0119215',
  '0163025', '0118928', '0311429',
];
const randomMovieID = () => Math.floor((Math.random() * Number(goodMovies.length)));
const randomGoodMovie = () => goodMovies[randomMovieID()];

module.exports.randomGoodMovie = randomGoodMovie;

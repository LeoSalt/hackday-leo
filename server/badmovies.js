const badMovies = [
  '0368226', '1316037', '0060666', '1788453', '3120314', '2397425',
  '1854506', '1233217', '2387413', '1674047',
];
const randomMovieID = () => Math.floor((Math.random() * Number(badMovies.length)));
const randomBadMovie = () => badMovies[randomMovieID()];

module.exports.randomBadMovie = randomBadMovie;

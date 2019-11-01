const randomizeBadButton = document.querySelector('#bad_button');
const randomizeGoodButton = document.querySelector('#good_button');
const randomizeGreatButton = document.querySelector('#great_button');
const movieContainer = document.querySelector('#movie_container');

const printToPage = (data) => {
  const RottenRating = data.Ratings[1] ? data.Ratings[1].Value : 'N/A';
  movieContainer.innerHTML = `<div class="rightsection">
  <p id="title">${data.Title}</p>
    <div class="ratings">
    <p id="rating">IMDB: ${data.Ratings[0].Value}</p>
    <p id="rating_RT">RT: ${RottenRating}</p>
    </div>
<p id="genre">${data.Genre}</p>
<p id="year">${data.Year}</p>
<p id="actors">${data.Actors}</p>
  </div>
  <div class="midsection">
      <p id="plotcall">PLOT</p>
      <p id="plot">${data.Plot}</p>
</div>
<div class="leftsection">
<img id="image" src="${data.Poster}" alt=""></img>
</div>
</div>`;
};


randomizeBadButton.addEventListener('click', () => {
  fetch('http://localhost:8080/api/movies/bad')
    .then((res) => res.json())
    .then((x) => printToPage(x));
});

randomizeGoodButton.addEventListener('click', () => {
  fetch('http://localhost:8080/api/movies/good')
    .then((res) => res.json())
    .then((x) => printToPage(x));
});

randomizeGreatButton.addEventListener('click', () => {
  fetch('http://localhost:8080/api/movies/great')
    .then((res) => res.json())
    .then((x) => printToPage(x));
});

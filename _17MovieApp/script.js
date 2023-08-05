const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1809f52f62ad56fe9ba1726426ee75df&page=1";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=1809f52f62ad56fe9ba1726426ee75df&query=";

let form = document.getElementById("form");
let search = document.getElementById("search");

// const searchInput = document.getElementById("search");
const loader = document.getElementById("loader");

// searchInput.addEventListener('keydown',(e)=>{
//     e.preventDefault(); 
//     if(e.key=="Enter"){
        
       
//     }
// })


getMovies(API_URL);

async function getMovies(url) {
  let res = await fetch(url);
  let data = await res.json();
  appendMoviesInTheMainDiv(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  loader.style.display="block";
  loader.style.opacity=1;   
  setTimeout(()=>{
      loader.style.opacity=0;  
      loader.style.display="none";
  },2500);
  const searchTerm = search.value; 



  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});

function appendMoviesInTheMainDiv(data) {
  let main = document.getElementById("main");
  main.innerHTML = null;

  data.forEach((movie) => {
    // console.log(movie);

    let movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    let img = document.createElement("img");
    img.setAttribute("src", IMG_URL + movie["poster_path"]);
    img.setAttribute("alt",movie["title"])   

    let movie_info = document.createElement("div");
    movie_info.classList.add("movie-info");

    let title = document.createElement("h3");
    title.textContent = movie["original_title"];

    let rating = document.createElement("span");
    rating.textContent = movie["vote_average"].toFixed(1);

    if (movie["vote_average"] > 8) {
      rating.classList.add("green");
    } else if (movie["vote_average"] > 5) {
      rating.classList.add("orange");
    } else {
      rating.classList.add("red");
    }

    movie_info.appendChild(title);
    movie_info.appendChild(rating);

    let overview = document.createElement("div");

    overview.classList.add("overview");

    let overviewHeadingTag = document.createElement("h3");
    overviewHeadingTag.textContent = "Overview";

    overview.appendChild(overviewHeadingTag);
    overview.append(movie["overview"]);

    movieElement.appendChild(img);
    movieElement.appendChild(movie_info);
    movieElement.appendChild(overview);

    main.appendChild(movieElement);
  });
}

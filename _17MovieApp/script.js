const API_URL =
  "https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc&api_key=1809f52f62ad56fe9ba1726426ee75df&page=1";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=1809f52f62ad56fe9ba1726426ee75df&query=";

let form = document.getElementById('form') 
let search = document.getElementById("search");

console.log("form"+search);
getMovies(API_URL);

async function getMovies(url) {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data['results']);
}
 

form.addEventListener('submit',(e)=>{ 
    e.preventDefault();
    const searchTerm = search.value; 
  
    if(searchTerm && searchTerm!==""){ 
        
        getMovies(SEARCH_URL+searchTerm); 
        search.value=''
    }else{
       
       window.location.reload();
    }
})
//api a064bafd014af9d120a2ee65cac8e8d7
//url:https://api.themoviedb.org/3/search/movie
//https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

//modern-view-controller

import Search from "./models/search";
import {elements,renderLoader,clearLoader} from './base';
import * as searchView from './views/searchView';
import * as movieView from './views/movieView';
import { Movie } from './models/Movie'; // Movie sınıfının dosya yolu ve adı


const state = {};

//Search Controller

const searchController = async () => {
  const keyword = elements.searchInput.value;

  if (keyword) {
    state.search = new Search(keyword);

    
    searchView.clearInput();
    searchView.clearResults();

    renderLoader(elements.movieListContainer);

    await state.search.getResults();
    searchView.displayResults(keyword,state.search.data);
    setTimeout(()=>{clearLoader(elements.movieListContainer);},1000) 

  } else {
    alert("Anahtar kelime girmelisiniz.");
  }
};

elements.searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  searchController();
  console.log("form submitted");
});


// Movie Controller

const movieController = async ()=>{
  const id=window.location.hash.replace("#","");
  if(id){
    state.movie =new Movie(id);

    renderLoader(elements.movieDetailsContainer);

    await state.movie.GetMovie();
    movieView.backToTop();

    movieView.displayMovie(state.movie.data);
    setTimeout(()=>{clearLoader(elements.movieDetailsContainer);},1000)

  }
};

window.addEventListener("hashchange",movieController);

elements.movieDetailsClose.addEventListener("click",movieView.closeDetails)
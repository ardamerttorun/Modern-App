import { elements } from "../base";

export const backToTop=()=>{
    window.scrollTo({top:0,behavior:'smooth'});
}

export const closeDetails=()=>{
    elements.movieDetailsContainer.classList.remove("d-block");
    elements.movieDetailsContainer.classList.add("d-none");
}

export const displayMovie = (movie) => {
    var html = '<div class="row">';

    var genres="";

    movie.genres.forEach(genre=>{
        genres +=`<span class="badge text-bg-primary ml-1">${genre.name}</span>`
    })

    html += `
        <div class="col-md-4">
            <img
            src="https://image.tmdb.org/t/p/w342/${movie.poster_path}"
            onerror="this.src='https://via.placeholder.com/92x138';"          
            class="mr-3 img-fluid"
            alt="${movie.title}"
        />
        </div>
    
        <div class="col-md-8">
            <div>
                <h5>${movie.original_title}</h5>
                <p>${movie.overview}</p>
                <p><small class="badge text-bg-primary">${movie.vote_average}</small></p>
                <hr>
                ${genres}
            </div>
        </div>
    `;
    
    html += "</div>";
    
  
  elements.movieDetailsContainer.classList.remove('d-none')  
  elements.movieDetailsContainer.classList.add('d-block');
  elements.movieDetails.innerHTML = html;
};

// Displaymovies.js
// Displaymovies.js
// Displaymovies.js





const displayMovies = {}

displayMovies.baseURL = "https://api.themoviedb.org/3"
displayMovies.apiKey = "bc9b7d4e7d76676601ab9360b373eedc"
// AC key - bc9b7d4e7d76676601ab9360b373eedc


displayMovies.movies = []

// ***************************************************
// Get movies from API
// ***************************************************

// In this api call we need to call twice? Or get both directors nummbers and movies into displayMovies.movies

displayMovies.findMovies = () => {
 
    fetch('https://api.themoviedb.org/3/person/2963/movie_credits?api_key=bc9b7d4e7d76676601ab9360b373eedc')
        .then((res) => {
            
            return res.json()
        })
        .then((data) => {
            
            displayMovies.movies = data.cast;
            
            displayMovies.moviesToPage()
        })

}

// ***************************************************
// PUT CAGE ON THE PAGE!!
// ***************************************************

const richieList = document.getElementsByClassName("richieList")[0]; 
const tarantinoList = document.getElementsByClassName("tarantinoList")[0]; 
const list = document.getElementsByClassName("list")[0]; 

displayMovies.moviesToPage = () => {

    console.log('buttn press')
    
    list.innerHTML = "";
    

    for (let i = 0; i < 6; i++ ) {

        let movie = displayMovies.movies[Math.floor(Math.random() * displayMovies.movies.length)];

        console.log(movie)

        // This is where I think the code needs to know which directors movie it is 
        // Maybe an if statement that adds a class of tarantino or richie to the list item below

        const newListItem= document.createElement("li")
        newListItem.className = 'listItem'

        const newListTitle = document.createElement("p")
        newListTitle.className = 'title';
        newListTitle.textContent = movie.title

        const newListOverview = document.createElement("p")
        newListOverview.className = 'overview'
        newListOverview.textContent = movie.overview

        const newListMetric = document.createElement("p")
        newListMetric.className = 'metric'
        newListMetric.textContent = `Average rating of: ${movie.vote_average}; from ${movie.vote_count} users`
        
        if (movie.poster_path) {
            const newCagePhoto = document.createElement("img")
            const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            newCagePhoto.setAttribute("src", movieImage)
            newCagePhoto.setAttribute("alt", `This is a poster for the movie: ${movie.title}`)
            newListItem.appendChild(newCagePhoto)
        } 
        newListItem.appendChild(newListTitle)
        newListItem.appendChild(newListOverview)
        newListItem.appendChild(newListMetric)
        
        richieList.appendChild(newListItem)
    }
    
}



document.getElementById('loadAMovie').addEventListener('click', displayMovies.moviesToPage, );

displayMovies.getCageOnThePage = () => {
    displayMovies.findMovies()
    
}

displayMovies.getCageOnThePage()
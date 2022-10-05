const API_KEY = 'api_key=9d223e8721e1d03ed3ee0b94439afea9'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY + '&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY

const mainElement = document.getElementById('movie-list')
const formElement = document.getElementById('form')
const searchElement = document.getElementById('movie-name')

getMovies(API_URL)

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results)
    })
}

function showMovies(data) {
    mainElement.innerHTML = ''

    data.forEach(element => {
        const {title, poster_path, release_date, vote_average} = element
        const movieElement = document.createElement('div')
        movieElement.classList.add('row')
        movieElement.innerHTML = `
            <div class="col">
                <div class="card mb-4">
                    <img src="${IMG_URL + poster_path}" class="card-img-top" alt="${title}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <p class="card-title">${title}</p>
                            <span class="card-title"><b>${vote_average}</b></span>
                        </div>
                        <p class="card-subtitle mb-2 text-muted">${release_date}</p>
                    </div>
                </div>
            </div>
        `

        mainElement.append(movieElement)
    });
}

formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = searchElement.value

    if(searchTerm) {
        getMovies(SEARCH_URL + '&query=' + searchTerm + '&page=1')
    } else {
        getMovies(API_URL)
    }
})
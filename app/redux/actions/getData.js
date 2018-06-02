import request from 'superagent'

const apikey = 'your_key'
const baseUrl = `http://www.omdbapi.com/?apikey=${apikey}`


export const FETCH_ALL_MOVIE = 'FETCH_ALL_MOVIE'

export const CHOOSE_ONE_MOVIE = 'CHOOSE_ONE_MOVIE'

export const fetchAllMovie = () => (dispatch) => {
  Promise.all([
    request.get(`${baseUrl}&s=superhero&page=1`),
    request.get(`${baseUrl}&s=superhero&page=2`),
    request.get(`${baseUrl}&s=superhero&page=3`),
    request.get(`${baseUrl}&s=superhero&page=4`),
    request.get(`${baseUrl}&s=superhero&page=5`),
    request.get(`${baseUrl}&s=superhero&page=6`),
    request.get(`${baseUrl}&s=superhero&page=7`),
    request.get(`${baseUrl}&s=superhero&page=8`),
    request.get(`${baseUrl}&s=superhero&page=9`),
    request.get(`${baseUrl}&s=superhero&page=10`),
    request.get(`${baseUrl}&s=superhero&page=11`),
    request.get(`${baseUrl}&s=superhero&page=12`),
    request.get(`${baseUrl}&s=superhero&page=13`),
  ])
    .then(response => {
        const result = []

        response.map(i => (i.body)?
        result.push(...i.body.Search) : null)

      dispatch({
      type: FETCH_ALL_MOVIE,
      payload: result
    })
    .catch(err => alert(err))
})
}



export const chooseOneMovie = (imdbID) => (dispatch) => {
  request
    .get(`${baseUrl}&i=${imdbID}`)
    .then(result => {
      dispatch({
        type: CHOOSE_ONE_MOVIE,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

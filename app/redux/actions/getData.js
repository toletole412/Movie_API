import request from 'superagent'

const apikey = 'd7a26a70'
const baseUrl = `http://www.omdbapi.com/?apikey=${apikey}`


export const FETCH_ALL_MOVIE = 'FETCH_ALL_MOVIE'

export const CHOOSE_ONE_MOVIE = 'CHOOSE_ONE_MOVIE'

export const fetchAllMovie = (value, page) => (dispatch) => {
    console.log("heeeyyy")
    request.get(`${baseUrl}&s=${value}&page=${page}`)
      .then(response => {

        dispatch({
          type: FETCH_ALL_MOVIE,
          payload: response.body.Search
        })
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

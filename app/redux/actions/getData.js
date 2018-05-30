import request from 'superagent'

const apikey = 'your_key'
const baseUrl = `http://www.omdbapi.com/?apikey=${apikey}`


export const FETCH_PAGE_ONE = 'FETCH_PAGE_ONE'
export const FETCH_PAGE_TWO = 'FETCH_PAGE_TWO'
export const FETCH_PAGE_THREE = 'FETCH_PAGE_THREE'
export const FETCH_PAGE_FOUR = 'FETCH_PAGE_FOUR'
export const FETCH_PAGE_FIVE = 'FETCH_PAGE_FIVE'
export const FETCH_PAGE_SIX = 'FETCH_PAGE_SIX'
export const FETCH_PAGE_SEVEN = 'FETCH_PAGE_SEVEN'
export const FETCH_PAGE_EIGHT = 'FETCH_PAGE_EIGHT'
export const FETCH_PAGE_NINE = 'FETCH_PAGE_NINE'
export const FETCH_PAGE_TEN = 'FETCH_PAGE_TEN'
export const FETCH_PAGE_ELEVEN = 'FETCH_PAGE_ELLVEN'
export const FETCH_PAGE_TWELVE = 'FETCH_PAGE_TWELVE'
export const FETCH_PAGE_THIRTEEN = 'FETCH_PAGE_THIRTEEN'


export const CHOOSE_ONE_MOVIE = 'CHOOSE_ONE_MOVIE'

export const fetchpageOne = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero`)
    .then(response => dispatch({
      type: FETCH_PAGE_ONE,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageTwo = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=2`)
    .then(response => dispatch({
      type: FETCH_PAGE_TWO,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageThree = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=3`)
    .then(response => dispatch({
      type: FETCH_PAGE_THREE,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageFour = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=4`)
    .then(response => dispatch({
      type: FETCH_PAGE_FOUR,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageFive = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=5`)
    .then(response => dispatch({
      type: FETCH_PAGE_FIVE,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageSix = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=6`)
    .then(response => dispatch({
      type: FETCH_PAGE_SIX,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageSeven = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=7`)
    .then(response => dispatch({
      type: FETCH_PAGE_SEVEN,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageEight = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=8`)
    .then(response => dispatch({
      type: FETCH_PAGE_EIGHT,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageNine = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=9`)
    .then(response => dispatch({
      type: FETCH_PAGE_NINE,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageTen = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=10`)
    .then(response => dispatch({
      type: FETCH_PAGE_TEN,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageEleven = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=11`)
    .then(response => dispatch({
      type: FETCH_PAGE_ELEVEN,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageTwelve = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=12`)
    .then(response => dispatch({
      type: FETCH_PAGE_TWELVE,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
}

export const fetchpageThirteen = () => (dispatch) => {
  request
    .get(`${baseUrl}&s=superhero&page=13`)
    .then(response => dispatch({
      type: FETCH_PAGE_THIRTEEN,
      payload: response.body.Search
    }))
    .catch(err => alert(err))
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

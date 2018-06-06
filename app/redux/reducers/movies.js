import {FETCH_ALL_MOVIE} from '../actions/getData'



export default (state = [], { type, payload } = {}) => {
    switch (type) {
      case FETCH_ALL_MOVIE:
        return payload

      default:
        return state
    }
  }

import {CHOOSE_ONE_MOVIE} from '../actions/getData'



export default (state = [], { type, payload } = {}) => {
    switch (type) {
      case CHOOSE_ONE_MOVIE:
        return payload

      default:
        return state
    }
  }

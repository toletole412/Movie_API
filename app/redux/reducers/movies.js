import {FETCH_PAGE_ONE} from '../actions/getData'



export default (state = [], { type, payload } = {}) => {
    switch (type) {
      case FETCH_PAGE_ONE:
        return payload
        
      default:
        return state
    }
  }

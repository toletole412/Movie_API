import {FETCH_PAGE_ONE, FETCH_PAGE_TWO, FETCH_PAGE_THREE, FETCH_PAGE_FOUR,
        FETCH_PAGE_FIVE, FETCH_PAGE_SIX, FETCH_PAGE_SEVEN, FETCH_PAGE_EIGHT,
        FETCH_PAGE_NINE, FETCH_PAGE_TEN, FETCH_PAGE_ELEVEN, FETCH_PAGE_TWELVE,
        FETCH_PAGE_THIRTEEN} from '../actions/getData'



export default (state = [], { type, payload } = {}) => {
    switch (type) {
      case FETCH_PAGE_ONE:
        return state.concat(payload)

      case FETCH_PAGE_TWO:
        return state.concat(payload)

      case FETCH_PAGE_THREE:
        return state.concat(payload)

      case FETCH_PAGE_FOUR:
        return state.concat(payload)

      case FETCH_PAGE_FIVE:
        return state.concat(payload)

      case FETCH_PAGE_SIX:
        return state.concat(payload)

      case FETCH_PAGE_SEVEN:
        return state.concat(payload)

      case FETCH_PAGE_EIGHT:
        return state.concat(payload)

      case FETCH_PAGE_NINE:
        return state.concat(payload)

      case FETCH_PAGE_TEN:
        return state.concat(payload)

      case FETCH_PAGE_ELEVEN:
        return state.concat(payload)

      case FETCH_PAGE_TWELVE:
        return state.concat(payload)

      case FETCH_PAGE_THIRTEEN:
        return state.concat(payload)

      default:
        return state
    }
  }

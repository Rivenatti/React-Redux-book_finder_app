import {
  SEARCH_INPUT_CHANGE,
  SET_BOOKS,
  RESET_STATE
} from "../actions/actions";

const INITIAL_STATE = {
  searchInputValue: "",
  books: []
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE: {
      return Object.assign({}, state, { searchInputValue: action.value });
    }

    case RESET_STATE: {
      return Object.assign({}, state, { searchInputValue: "", books: [] });
    }

    case SET_BOOKS: {
      return {
        ...state,
        books: [...state.books, action.books]
      };
    }
    default:
      return state;
  }
};

export default rootReducer;

import { connect } from "react-redux";
import { BookSearch } from "../components/BookSearch";
import { SEARCH_INPUT_CHANGE, RESET_STATE } from "../actions/actions.js";
import Api from "../API/API";

const mapStateToProps = state => {
  return {
    searchInputValue: state.searchInputValue,
    books: state.books,
    message: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: event => {
      dispatch({ type: SEARCH_INPUT_CHANGE, value: event.target.value });
    },
    onSubmit: (event, query) => {
      event.preventDefault();
      dispatch({ type: RESET_STATE });
      Api.getBooks(dispatch, query);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookSearch);

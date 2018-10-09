import { connect } from "react-redux";
import { BookSearch } from "../components/BookSearch";
import { SEARCH_INPUT_CHANGE } from "../actions/actions.js";
import Api from "../API/API";

const mapStateToProps = state => {
  return {
    searchInputValue: state.searchInputValue,
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: event => {
      dispatch({ type: SEARCH_INPUT_CHANGE, value: event.target.value });
    },
    onSubmit: (event, query) => {
      event.preventDefault();
      Api.getBooks(dispatch, query);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookSearch);

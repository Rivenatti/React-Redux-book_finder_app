import React from "react";

export const BookSearch = props => {
  console.log(props.books);
  return (
    <div>
      <h1>Book: </h1>
      <form onSubmit={event => props.onSubmit(event, props.searchInputValue)}>
        <input
          value={props.searchInputValue}
          onChange={props.handleInputChange}
        />
        <button>Search</button>
      </form>

      <ul>
        {props.books.length > 1 ? (
          props.books.map(book => {
            return <li>{book.title}</li>;
          })
        ) : (
          <span>start searching</span>
        )}
      </ul>
    </div>
  );
};

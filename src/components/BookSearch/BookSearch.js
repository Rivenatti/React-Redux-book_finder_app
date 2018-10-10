import React from "react";
import "./BookSearch.css";
import { Link } from "react-router-dom";

export const BookSearch = props => {
  return (
    <div className="wrapper">
      <h1 className="page--title">Book: </h1>
      <form onSubmit={event => props.onSubmit(event, props.searchInputValue)}>
        <input
          value={props.searchInputValue}
          onChange={props.handleInputChange}
          className="searching__input"
          placeholder="Title of the book..."
        />
        <button className="searching__button">Search</button>
      </form>

      <div className="books">
        {props.books.length > 1 ? (
          props.books.map(book => {
            return (
              <div key={book.id} className="book__card">
                <h1 className="book--title">{book.title}</h1>
                <img
                  src={book.thumbnail}
                  alt="book-thumbnail"
                  className="book__thumbnail"
                />
                <p className="book--short-description">
                  {book.description} ...
                </p>
                <Link
                  to={{
                    pathname: `/book/${book.id}`,
                    data: { book }
                  }}
                >
                  <button className="button">More...</button>
                </Link>
              </div>
            );
          })
        ) : (
          <span className="errorMessage">{props.message}</span>
        )}
      </div>
    </div>
  );
};

import React, { Component } from "react";
import "./BookDetails.css";
import { Link } from "react-router-dom";

class BookDetails extends Component {
  state = {};

  componentDidMount = async () => {
    let path = this.props.location.pathname.slice(6);
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${path}`)
      .then(data => data.json())
      .then(book => {
        this.setState({
          id: book.items[0].id,
          title: book.items[0].volumeInfo.title,
          thumbnail:
            book.items[0].volumeInfo.imageLinks === undefined
              ? "https://upload.wikimedia.org/wikipedia/en/d/d3/No-picture.jpg"
              : book.items[0].volumeInfo.imageLinks.thumbnail,
          authors:
            book.items[0].volumeInfo.authors === undefined
              ? "Not found any data about authors."
              : book.items[0].volumeInfo.authors.toString(),
          pages:
            book.items[0].volumeInfo.pageCount === undefined
              ? "Not found any data about the page cound"
              : book.items[0].volumeInfo.pageCount,
          published: book.items[0].volumeInfo.publishedDate,
          description:
            book.items[0].volumeInfo.description === undefined
              ? "Not found any data about the description."
              : book.items[0].volumeInfo.description,
          lang: book.items[0].volumeInfo.language.toUpperCase()
        });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="book--details">
        <h1 className="book--title">{this.state.title}</h1>
        <img
          src={this.state.thumbnail}
          alt="book-thumbnail"
          className="book--thumbnail"
        />
        <p className="book--authors">Authors: {this.state.authors}</p>
        <p className="book--pages">Pages: {this.state.pages}</p>
        <p className="book--published">Published: {this.state.published}</p>
        <p className="book--language">Langauge: {this.state.lang}</p>
        <p className="book-description">Details: {this.state.description}</p>
        <Link to="/">
          <button className="button">RETURN</button>
        </Link>
      </div>
    );
  }
}

export default BookDetails;

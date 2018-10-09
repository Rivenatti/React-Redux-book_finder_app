import { SET_BOOKS } from "../actions/actions";

const getBooks = (dispatch, query) => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.totalItems === 0
        ? dispatch({
            type: SET_BOOKS,
            books: {}
          })
        : data.items.map(book => {
            return dispatch({
              type: SET_BOOKS,
              books: {
                title: book.volumeInfo.title,
                thumbnail: book.volumeInfo.imageLinks.thumbnail,
                author: book.volumeInfo.authors.toString(),
                pages: book.volumeInfo.pageCount,
                published: book.volumeInfo.publishedDate,
                description: book.volumeInfo.description.slice(0, 100),
                lang: book.volumeInfo.language
              }
            });
          });
    });
};

export default { getBooks };

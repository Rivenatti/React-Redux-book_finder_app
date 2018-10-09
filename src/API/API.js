import { SET_BOOKS } from "../actions/actions";

const getBooks = async (dispatch, query) => {
  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.totalItems === 0
        ? dispatch({
            type: SET_BOOKS,
            books: [],
            message: "Not found ."
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
                description: book.volumeInfo.description
                  .split(" ")
                  .slice(0, 25)
                  .join(" "),
                lang: book.volumeInfo.language
              },
              message: ""
            });
          });
    });
};

export default { getBooks };

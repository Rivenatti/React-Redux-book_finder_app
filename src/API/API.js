import { SET_BOOKS } from "../actions/actions";

const getBooks = async (dispatch, query) => {
  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.totalItems === 0 // IF RESPONSE IS EMPTY, DISPATCH EMPTY ACTION
        ? dispatch({
            type: SET_BOOKS,
            books: [],
            message: "Not found any position with given title."
          })
        : data.items.map(book => {
            return dispatch({
              // ELSE SET THE STATE WITH THE DATA
              type: SET_BOOKS,
              books: {
                id: book.id,
                title: book.volumeInfo.title,
                thumbnail:
                  book.volumeInfo.imageLinks === undefined // CHECK IF BOOK HAS A THUMBNAIL
                    ? "https://upload.wikimedia.org/wikipedia/en/d/d3/No-picture.jpg"
                    : book.volumeInfo.imageLinks.thumbnail,
                author:
                  book.volumeInfo.authors === undefined // CHECK IF DATA ABOUT BOOK HAS INFORMATION ABOUT AUTHORS
                    ? "Not found any data about authors."
                    : book.volumeInfo.authors.toString(),
                pages: book.volumeInfo.pageCount,
                published: book.volumeInfo.publishedDate,
                description:
                  book.volumeInfo.description === undefined // CHECK IF DATA ABOUT BOOK HAS INFORMATION ABOUT DESCRIPTION
                    ? "Not found any data about the description."
                    : book.volumeInfo.description // SHORTEN THE DESCRIPTION TO 25 CHARACTERS
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

/*eslint no-console: "error"*/
const selectBook = book => ({
    type: 'BOOK_SELECTED',
    payload: book.title
});

export default selectBook;

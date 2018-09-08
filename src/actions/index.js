export function selectBook(book) {
  // selectBook is an action creator, it needs to return an action,
  // an object withe a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

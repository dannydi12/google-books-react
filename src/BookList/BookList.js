import React from 'react';
import Book from '../Book/Book';

function BookList(props) {
  const books = props.results.map((item, i) => (
    <Book key={item.id} data={item}/>
  ));

  return (
    <ul>
      {books}
    </ul>
  );
}

export default BookList;


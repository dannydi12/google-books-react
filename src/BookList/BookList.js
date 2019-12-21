import React from 'react';
import Book from '../Book/Book';

function BookList(props) {
  const books = props.results.map((item, i) => (
    <Book key={i} data={item}/>
  ));

  return (
    <ul>
      {books}
    </ul>
  );
}

export default BookList;


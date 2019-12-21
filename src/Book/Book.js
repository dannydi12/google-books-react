import React from 'react';
import './Book.css';

function Book(props) {
  return (
    <li>
      <h2>{props.data.volumeInfo.title}</h2>
      <section>
      <img src={props.data.volumeInfo.imageLinks.thumbnail} alt={props.data.volumeInfo.title + 'cover art'} ></img>
      <div>
        <p>{props.data.volumeInfo.authors && props.data.volumeInfo.authors[0]}</p>
        <p>{props.data.saleInfo.saleability === 'FOR_SALE' && '$' + props.data.saleInfo.retailPrice.amount}</p>
        <p>{props.data.volumeInfo.description}</p>
      </div>
      </section>
    </li>
  )

}

export default Book;
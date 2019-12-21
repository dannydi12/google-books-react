import React from 'react';
import './Book.css';

function Book(props) {
  return (
    <li>
      <h2>{props.data.volumeInfo.title}</h2>
      <img src={props.data.volumeInfo.imageLinks.smallThumbnail} alt={props.data.volumeInfo.title + 'cover art'} ></img>
      <div>
        <p>{props.data.volumeInfo.authors && props.data.volumeInfo.authors[0]}</p>
        <p>{props.data.saleInfo.saleability === 'FOR_SALE' && '$' + props.data.saleInfo.retailPrice.amount}</p>
        <p>{props.data.volumeInfo.description}</p>
      </div>
    </li>
  )

}

export default Book;
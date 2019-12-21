import React from 'react';
import './SearchBar.css';


function SearchBar(props) {
  return (
    <header>
      <h1>Google Book Search</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleSearch()
      }}>
        <label htmlFor="search">Search: </label>
        <input name="search" onChange={e => props.handleChange(e)}></input>
        <button type="submit">Submit</button>

        <fieldset>
          <label htmlFor="print">Print Type: </label>
          <select name="print" onChange={e => props.handleChange(e)}>
            <option value="partial">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>

          <label htmlFor="type">Book Type: </label>
          <select name="type" onChange={e => props.handleChange(e)}>
            <option value="all">All</option>
            <option value="ebooks">E-Books</option>
          </select>
        </fieldset>

      </form>
    </header>
  );
}

export default SearchBar;
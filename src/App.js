import React from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList';

class App extends React.Component {
  state = {
    search: '',
    print: 'all',
    type: 'partial',
    results: []
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSearch = () => {
    const key = 'AIzaSyDgqT-OgmfO5KsnYMFbSRDjV7t06Aye2Ak';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURI(this.state.search)}&filter=${this.state.type}&printType=${this.state.print}&maxResults=40&key=${key}`;

    fetch(url)
    .then(response => {
      if(!response.ok) {
        throw Error('Something went wrong');
      }
      return response;
    })
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        results: []
      })
      this.setState({
        results: [...responseJson.items]
      })
    })
    .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch} handleChange={this.handleChange}/>
        {this.state.results.length > 0 && <BookList results={this.state.results}/>}
      </div>
    );
  }
}

export default App;

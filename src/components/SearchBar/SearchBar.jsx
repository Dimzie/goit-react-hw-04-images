import React from 'react';
import { Component } from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { toast } from 'react-toastify';

class SearchBar extends Component {
  state = {
    query: '',
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if(this.state.query.trim() === '') {
        return toast.warn('Please write something');
    }

    this.props.onSubmit(this.state.query);
    // console.log(e.target.elements.input.value)
  };

  onInputChange = e => {
    this.setState({ query: e.target.value });
    // console.log(e.target.value);
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.onHandleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="button-label">
              <PiMagnifyingGlassBold />
            </span>
          </button>

          <input
            value={this.state.query}
            name="input"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    query: '',
    page: 1
  }

  onSubmit = (query) => {
    this.setState({query, page: 1});
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery query={this.state.query} onLoadMore={this.onLoadMore} page={this.state.page}/>
        <ToastContainer autoClose={3000} limit={3}/>
      </div>
    );
  }
}

import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { SerchBar } from './SearchBar/SearchBar';
import { fetchQuerry } from 'api';
import { GalleryList } from './GalleryList/GalleryList';
import { LoadMore } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    loader: false,
    images: [],
    query: '',
    page: 1,
    totalImage: 0,
  };

  async componentDidUpdate(prevProp, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loader: true });
        const newQuerry = this.state.query.split('/');
        const imageList = await fetchQuerry(newQuerry[1], this.state.page);
        this.setState(prevStates => {
          return {
            images: [...prevStates.images, ...imageList.hits],
            totalImage: imageList.totalHits,
          };
        });
      } catch (error) {
        toast.error('Error! Try again');
      } finally {
        this.setState({ loader: false });
      }
    }
  }

  onSubmit = evt => {
    evt.preventDefault();
    const newQuery = evt.target.elements.querry.value.trim();
    if (!newQuery) {
      return toast.error('Can not be empty');
    }
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { images, page, totalImage, loader } = this.state;
    return (
      <div>
        <GlobalStyle />
        <SerchBar onSubmit={this.onSubmit} />
        {images.length > 0 && <GalleryList imagesList={images} />}
        {12 * page < totalImage && !loader && (
          <LoadMore loadMore={this.loadMore} />
        )}
        {loader && <Loader />}
        <Toaster />
      </div>
    );
  }
}

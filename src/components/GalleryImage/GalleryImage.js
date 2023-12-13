import { ModalImage } from 'components/ModalImage/ModalImage';
import { Component } from 'react';
import { Image } from './GalleryImage.styled';

export class GalleryImage extends Component {
  state = {
    isOpen: false,
  };

  modalClose = () => {
    this.setState({ isOpen: false });
  };

  modalOpen = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { isOpen } = this.state;
    const { image } = this.props;
    return (
      <>
        <Image
          onClick={this.modalOpen}
          src={image.webformatURL}
          alt={image.tags}
        />
        <ModalImage
          isModalOpen={isOpen}
          modalClose={this.modalClose}
          largeImageURL={image.largeImageURL}
          tags={image.tags}
        />
      </>
    );
  }
}

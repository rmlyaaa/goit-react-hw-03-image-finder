import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalImage = ({
  isModalOpen,
  modalClose,
  largeImageURL,
  tags,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={modalClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <>
        <img src={largeImageURL} alt={tags} />
      </>
    </Modal>
  );
};

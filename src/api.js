import axios from 'axios';

const keyPixaby = '39589484-3fe05f6fbca1a92c7774e2aca';
axios.defaults.baseURL = `https://pixabay.com/api`;

export const fetchQuerry = async (querry, page) => {
  const response = await axios.get(
    `?key=${keyPixaby}&q=${querry}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

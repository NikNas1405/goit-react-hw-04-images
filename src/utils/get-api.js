import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38138009-0f6c3d6b3a80b2eb535996fd8';

const defaultParams = {
  key: API_KEY,
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export async function getAsked(searchRequest, page) {
  const options = new URLSearchParams({
    ...defaultParams,
    q: `${searchRequest}`,
    page: page,
  });
  try {
    const response = await axios.get(`${BASE_URL}?${options}`);
    return response.data;
  } catch (error) {
    toast.info(
      'Sorry. There are no images matching your search query. Please try again.'
    );
  }
}
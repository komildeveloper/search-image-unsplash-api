import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID S1-sS5OmmLMFZf9JbCqoPzig_eJ58S2I_IuSwhyCX48'
  }
});

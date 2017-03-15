import axios from 'axios';

import API_KEYS from '../api-keys';

export const FETCH_POSTS = 'FETCH_POSTS';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = `?key=${API_KEYS.reduxBlogKey}`;

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request  
  };
}
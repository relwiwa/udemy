import axios from 'axios';

import API_KEYS from '../api-keys';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = `?key=${API_KEYS.reduxBlogKey}`;

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request  
  };
}

export function createPost(props) {
  // - Form values are stored in props.title, etc.
  // - Form values get passed on to post request as second argument
  const request = axios.post(`{ROOT_URL)/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}
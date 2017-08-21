import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_ERROR, AUTH_USER, UNAUTH_USER } from './types';

const API_URL = 'http://localhost:3090';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function signinUser({ email, password }) {
  
  // Get access to dispatch method via ReduxThunk (it calls this function automatically)
  return function(dispatch) {

    // Submit email+password to server
    axios.post(`${API_URL}/signin`, { email, password })
    // If request is good...
    .then(response => {
      // - Update state to indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // - Save the JWT token
      localStorage.setItem('token', response.data.token);
      // - Redirect to route '/feature'
      browserHistory.push('/feature');
    })
    // If request is bad...
    .catch(() => {
      // - Show an error to the user
      dispatch(authError('Bad Login Info'));
    });
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function signupUser({ email, password }) {
  
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch(() => {
      dispatch(authError('Signup failed'));
    });
  }
}

export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch, getState, axiosApiAccess) => {
  // request is to api/users via Axios baseUrl
  const res = await axiosApiAccess('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export default function({ dispatch }) {
  // middleware chain
  return next => action => {
    // check for existence of promise (and payload)
    if (!action.payload || !action.payload.then) {
      // send result on to next middleware; if there's no more middleware,
      // send it to reducers
      return next(action);
    }

    action.payload
    .then((response) => {
      // create new action with the old action type, but replace
      // the promise with the response data as payload
       const newAction = {...action, payload: response };
       // instead of calling next, call dispatch to make sure all
       // middlewares are called again with the response data
       // => this is necessary whenever a action or payload is changed
       dispatch(newAction);
    });
  };
}

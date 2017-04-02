export default function({ dispatch }) {
  // middleware chain
  return next => action => {
    console.log(action);

    // send result on to next middleware; if there's no more middleware,
    // send it to reducers
    next(action);
  };
}

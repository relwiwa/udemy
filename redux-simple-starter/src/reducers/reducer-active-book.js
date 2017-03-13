// All reducers have two arguments:
// - Current state: i.e. not application state, only state
//   reducer is responsible for
// - Action: reducer only gets called when action happens
// - Reducers are not allowed to return undefined, so state gets initially
//   set to null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
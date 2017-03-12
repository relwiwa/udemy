import React from 'react';


// Functional way to define component

/*const SearchBar = () => {
  return <input />
}*/


// Class-based way to define component

class SearchBar extends React.Component {

  // - Class-based components have states, i.e. a javascript object
  // - States get initialized within the constructor function
  // - Whenever state changes, component gets re-rendered
  constructor(props) {
    super(props);

    // - Only within constructor, state gets set with =
    // - Everywhere else state gets manipulated with this.setState method
    this.state = {
      term: ''
    };
  }

  // - Every class-based component must provide render method
  render() {
    // - Input element is controlled component, as it gets its value from state
    // - Steps:
    //   1. default input gets set from state
    //   2. User triggers change event which triggers setState method
    //   3. State gets updated and component gets re-rendered, updating
    //      input's value 
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

}


export default SearchBar;
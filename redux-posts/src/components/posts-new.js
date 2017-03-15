import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    // this.props contains:
    // - declared form fields title, categories, content
    // - handleSubmit function of reduxForm
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    /* form onSubmit:
       - handleSubmit function of reduxForm needs to be passed to onSubmit
       - handleSubmit expects ActionCreator as argument
       Procedure:
       - handleSubmit calls ActionCreator with contents of form when form
         is submitted and valid
       - Object with form field values gets handed as props to ActionCreator
       - ActionCreator posts form values to backend */
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>{}

        <h3>Create a new post</h3>

        <div className="form-group">
          <label>Title</label>
          {/* Add reduxForm helpers by destructuring the respective field properties */}
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn bnt-primary">Submit</button>
      </form>
    );
  }
}

// - reduxForm is similar to connect function, it has the same behavior
// - reduxForm can also inject ActionCreators and promote comonents to containers
// - reduxForm updates application state property state.form.PostsNew
// - reduxForm also adds ActionCreator
/* connect: 1. mapStateToProps, 2. mapDispatchToProps
   reduxForm: 1. form configuration, 2. mapStateToProps, 3. mapDispatchToProps */
export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
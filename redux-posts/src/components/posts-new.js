import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions';

class PostsNew extends Component {
  // - Gives access to this.context.router property within component
  // - Context will be retrieved from router
  // - Necessary to be able to navigate after form submission via push method
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
    .then(() => {
      // Blog post has been created, navigate user to the index
      // using router.push method
      this.context.router.push('/');
    });
  }

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
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>{}

        <h3>Create a new post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          {/* Add reduxForm helpers by destructuring the respective field properties */}
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // errors[field] ends up in props.fields[field].error
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  if (!values.categories) {
    errors.categories = 'Enter categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

// - reduxForm is similar to connect function, it has the same behavior
// - reduxForm can also inject ActionCreators and promote comonents to containers
// - reduxForm updates application state property state.form.PostsNew
// - reduxForm also adds ActionCreator
/* connect: 1. mapStateToProps, 2. mapDispatchToProps
   reduxForm: 1. form configuration, 2. mapStateToProps, 3. mapDispatchToProps */
export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
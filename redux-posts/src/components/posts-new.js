import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title for Post'
  },
  categories: {
    type: 'input',
    label: 'Enter some categories for this post'
  },
  content: {
    type: 'textarea',
    label: 'Post Contents'
  }
};

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

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
        <label>{fieldConfig.label}</label>
        {/* Add reduxForm helpers by destructuring the respective field properties */}
        <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
        <div className="text-help">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {
    /* form onSubmit:
       - handleSubmit function of reduxForm needs to be passed to onSubmit
       - handleSubmit expects ActionCreator as argument
       Procedure:
       - handleSubmit calls ActionCreator with contents of form when form
         is submitted and valid
       - Object with form field values gets handed as props to ActionCreator
       - ActionCreator posts form values to backend */
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>{}

        <h3>Create a new post</h3>

        {_.map(FIELDS, this.renderField.bind(this))}

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // errors[field] ends up in props.fields[field].error
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`;
    }
  });

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
  fields: _.keys(FIELDS),
  validate
}, null, { createPost })(PostsNew);
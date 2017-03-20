import { renderComponent, expect } from '../test-helper';
import CommentBox from '../../src/components/comment-box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    // component is jquery wrapped version of component
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    // find/('textarea') is enabled via chai-jquery
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  // group tests with another describe
  describe('entering some text', () => {

    beforeEach(() => {
      // simulate text input change event
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      // component is top-level element which is form, so finding form is not necessary
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });

  });

});

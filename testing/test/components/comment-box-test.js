import { renderComponent, expect } from '../test-helper';
import CommentBox from '../../src/components/comment-box';

describe('CommentBox', () => {

  it('has the correct class', () => {
    const component = renderComponent(CommentBox);
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    // component is jquery wrapped version of component
    const component = renderComponent(CommentBox);
    // find/('textarea') is enabled via chai-jquery
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });

});

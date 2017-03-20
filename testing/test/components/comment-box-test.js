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

});

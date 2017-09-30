/*  requestAnimationFrame shim for testing needs to be in separate file
    inclusion via setupFiles in package.json Jest config doesn't work with
    create-react-cli:
    https://github.com/facebook/jest/issues/4545#issuecomment-332851105 */
import reactShim from './react-shim';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export default configure({ adapter: new Adapter() });

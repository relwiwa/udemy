import '../styles/image-viewer.css';
import small from '../assets/small.jpg';

export default () => {
  const image1 = document.createElement('img');
  image1.src = small;
  document.body.appendChild(image1);
}

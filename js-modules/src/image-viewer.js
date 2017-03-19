import '../styles/image-viewer.css';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

const image1 = document.createElement('img');
image1.src = small;
document.body.appendChild(image1);

const image2 = document.createElement('img');
image2.src = big;
document.body.appendChild(image2);
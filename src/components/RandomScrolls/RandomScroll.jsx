// RandomScroll.jsx
import image1 from '../../components/images/imageN2.jpg';
import image2 from '../../components/images/image2.png';
import image3 from '../../components/images/image2.png';

// Create an array of imported images
const images = [image1, image2, image3];
// Function to get a random image URL
const getRandomPhoto = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

export default getRandomPhoto;

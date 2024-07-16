import image1 from '../../components/images/treadmil1.jpg';
import image2 from '../../components/images/treadmil2.jpg';
import image3 from '../../components/images/treadmil1.jpg';

// Create an array of imported images
const images = [image1, image2, image3];
// Function to get a random image URL
const getTread = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

export default getTread;

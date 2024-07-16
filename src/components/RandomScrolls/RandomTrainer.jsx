import image1 from '../../components/images/bodybuilding.jpg';
import image2 from '../../components/images/mrs trainer.jpg';
import image3 from '../../components/images/wrestler.jpg';
import image4 from '../../components/images/trainer.jpg';

// Create an array of imported images
const images = [image1, image2, image3, image4];
// Function to get a random image URL
const getExpert = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

export default getExpert;
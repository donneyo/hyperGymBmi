// RandomPhoto.jsx
import React, { useState, useEffect } from 'react';

// Manually define paths to images in the public directory
const images = [
  '/images/imageN2.jpg',
  '/images/image2.png',
  '/images/image2.png'
];

const RandomPhoto = () => {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    // Select a random image
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  if (!randomImage) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Random Image</h1>
      <img src={randomImage} alt="Random" />
    </div>
  );
};

export default RandomPhoto;

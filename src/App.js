import { useState } from "react";

import images from "../src/assets/images";

function App() {
  // State for current image index
  const [imageIndex, setImageIndex] = useState(0);

  const handleForward = () => {
    setImageIndex((prevImageIndex) => {
      // If last image is reached then go back to the first image again otherwise go to the next image
      return prevImageIndex === images.length - 1 ? 0 : prevImageIndex +1;
    });
  };

  const handleBackward = () => {
    setImageIndex((prevImageIndex) => {
      // If the first image is reached then go back to the last image Otherwise go to the previous image
      return prevImageIndex === 0 ? images.length - 1 : prevImageIndex - 1;
    });
  };

  return (
    <div
      id="app-container"
      className="flex justify-center items-center mt-10 text-center"
    >
      <button id="backward-button" onClick={handleBackward}></button>

      <div
        id="images-container"
        className="w-2/4 h-96 flex items-center overflow-hidden"
      >
        <img
          src={images[imageIndex]}
          key={imageIndex}
          alt={`nature-${imageIndex + 1}`}
          className="max-w-full h-auto block object-contain transition-opacity opacity-0 duration-300 ease-in"
          onLoad={(e) => e.target.style.opacity = 1}
        />
      </div>

      <button id="forward-button" onClick={handleForward}></button>
    </div>
  );
}

export default App;

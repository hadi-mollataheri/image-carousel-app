import { useState } from "react";

import images from "../src/assets/images";

function App() {
  // Create state for the images so we can figure out a way to show
  // one image at the time and go the next or previous image with
  // clicking on buttons
  // I will use the state to store one image element to it at time
  // and then when user click on buttons i will increment or decrement
  // the index of the images array element
  const [imageIndex, setImageIndex] = useState(0);

  const handleForward = () => {
    setImageIndex((prevImageIndex) => {
      prevImageIndex += 1;
      // If the index was not the last index + 1(last image) then return it
      if (prevImageIndex !== images.length) return prevImageIndex;
      // Otherwise if the image was last image(index is at lastIndex + 1 and not exist) then return the first image
      else return (prevImageIndex = 0);
    });
  };

  const handleBackward = () => {
    setImageIndex((prevImageIndex) => {
      prevImageIndex -= 1;
      // If image(index) was not the first image then return it
      if (prevImageIndex !== -1) return prevImageIndex;
      // Otherwise if the image was the first image(index is at -1 and not exist) then return the last image
      else return (prevImageIndex = images.length - 1);
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
          alt="jungle"
          className="max-w-full h-auto block object-contain"
        />
      </div>

      <button id="forward-button" onClick={handleForward}></button>
    </div>
  );
}

export default App;

// To Fix:
// *- When images changes the size of them will change too and this cause
// the buttons to change their place vertically, fix this behavior

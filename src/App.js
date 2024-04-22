import images from "../src/assets/images";

function App() {
  return (
    <div id="app-container" className="flex justify-center items-center mt-10 text-center">
      <button
        id="back-button"
        className="flex justify-center items-center m-6 p-5 rounded-full bg-black text-white w-3 h-3 text-center"
      >
        {"<"}
      </button>

      <div id="images-container" className="w-2/4">
        <img src={images[1]} alt="jungle" className="max-w-full h-auto block" />
      </div>

      <button
        id="forward-button"
        className="flex justify-center items-center m-6 p-5 rounded-full bg-black text-white w-3 h-3 text-center"
      >
        {">"}
      </button>
    </div>
  );
}

export default App;

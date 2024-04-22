import images from "../src/assets/images";

function App() {
  return (
    <div>
      <img
        src={images[1]}
        alt="jungle"
        className='w-84 h-96'
      />
    </div>
  );
}

export default App;

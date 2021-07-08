import './App.css';
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import CakeList from "./CakeList";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="p-3 mx-5 my-3 border bg-light"></div>
      <CakeList />
    </div>
  );
}

export default App;

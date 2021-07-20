import Carousel from "./Carousel";
import CakeList from "./CakeList";

export default function Home() {
    return (
        <div>
            <Carousel />
            <div className="p-3 mx-5 my-3 border bg-light"></div>
            <CakeList />
        </div>
    );
}

import Carousel from "./Carousel";
import CakeList from "./CakeList";

export default function Home(props) {
    return (
        <div>
            <Carousel />
            <div className="p-3 mx-5 my-3 border bg-light"></div>
            <CakeList history={props.history} />
        </div>
    );
}

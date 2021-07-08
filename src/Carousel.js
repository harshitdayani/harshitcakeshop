import carousel1 from "./assets/carousel1.jpg";
import carousel2 from "./assets/carousel2.jpg";
import carousel3 from "./assets/carousel3.jpg";
import carousel4 from "./assets/carousel4.jpg";
import carousel5 from "./assets/carousel5.jpg";
import carousel6 from "./assets/carousel6.jpg";

// const carousel_img = [carousel1 ,carousel2, carousel3, carousel4, carousel5, carousel6];

export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img className="d-block w-100 carousel-img-height" src={carousel1} alt="cake" />
                </div>
                <div className="carousel-item active">
                    <img className="d-block w-100 carousel-img-height" src={carousel2} alt="cake" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carousel-img-height" src={carousel3} alt="cake" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carousel-img-height" src={carousel4} alt="cake" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carousel-img-height" src={carousel5} alt="cake" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carousel-img-height" src={carousel6} alt="cake" />
                </div>
              
               
            </div>
            {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a> */}
        </div>
    );
}
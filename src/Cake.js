import { FaRupeeSign } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

const Cake = (props) => {
    // console.log(props.cake);
    return (
        <div className="col-md-3">
            <section className="panel">
                <div className="pro-img-box">
                    <img className="product_img" src={props.cake.image} alt="" />
                    <p className="adtocart">
                        <label className="mt-2"><FiShoppingCart /></label>
                    </p>
                </div>

                <div className="panel-body text-center">
                    <h4>
                        <label className="pro-title">
                            {props.cake.name}
                        </label>
                    </h4>
                    <p className="price"><FaRupeeSign /> {props.cake.price}</p>
                </div>
            </section>
        </div>
    );
}

export default Cake;
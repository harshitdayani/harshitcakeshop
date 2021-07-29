/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import Loading from "../Loading/loading";
import './CakeDetails.css';

const CakeDetails = (props) => {
    var [cakeDetail, setCakeDetail] = useState([]);
    var [loadingBool, setLoadingBool] = useState(true);

    useEffect(() => {
        let apiurl = process.env.REACT_APP_BASE_API_URL + "/cake/" + props.match.params.cakeid;
        console.log(apiurl);
        axios({
            method: "get",
            url: apiurl
        }).then((response) => {
            console.log("Cake detail : ", response.data, loadingBool);
            setLoadingBool(false);
            setCakeDetail(response.data.data);
        }, (error) => {
            console.log("Cake Detail Error : ", error);
        });
    }, []);

    console.log("Cakedetail : ", cakeDetail, loadingBool);

    let Ingredients;
    // var ingredientArr = cakeDetail.ingredients;
    // if (cakeDetail.ingredients.length > 0) {
    //     Ingredients = cakeDetail.ingredients.map((ingredient, index) => {
    //         return (
    //             <em>
    //                 <span className="" data-toggle="tooltip" title={ingredient} key={index}>{ingredient}</span>
    //             </em>
    //         )
    //     });
    // } else {
    //     Ingredients = <span> - </span>
    // }


    return (
        loadingBool ?
            <Loading />
            :
           
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">

                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src={cakeDetail.image} alt={cakeDetail.cakeid} /></div>
                                </div>
                                <ul className="preview-thumbnail nav nav-tabs">
                                    <li className="active"><p data-target="#pic-1" data-toggle="tab"><img src={cakeDetail.image} alt={cakeDetail.cakeid} /></p></li>
                                </ul>

                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{cakeDetail.name}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarFill />
                                        <BsStarHalf />
                                        {/* <span className="fa fa-star"></span>  */}
                                    </div>
                                    <span className="review-no">{cakeDetail.reviews} reviews</span>
                                </div>
                                <p className="product-description">{cakeDetail.description}</p>
                                <h4 className="price">Current price: <span>₹ {cakeDetail.price}</span></h4>
                                <p className="vote"><strong>{cakeDetail.likes}</strong> buyers enjoyed / likes this cake! <strong>({cakeDetail.ratings} rating)</strong></p>
                                <h5 className="sizes mb-5">Weight (in Pounds):
                                    <span className="size p-sm-2" data-toggle="tooltip" title="small">1 </span>
                                    <span className="size p-sm-2" data-toggle="tooltip" title="medium">2 </span>
                                    <span className="size p-sm-2" data-toggle="tooltip" title="large">3 </span>
                                    <span className="size p-sm-2" data-toggle="tooltip" title="xtra large">More </span>
                                </h5>
                                <h5 className="colors mb-5">Flavour:
                                    <span className="size p-sm-2" data-toggle="tooltip" title={cakeDetail.flavour}>{cakeDetail.flavour ? cakeDetail.flavour : "-"}</span>
                                </h5>
                                <h5 className="colors mb-2">Ingredients:</h5>
                                {Ingredients}

                                <div className="action">
                                    <button className="btn btn-primary m-sm-2" type="submit">Add to cart</button>
                                    <button className="btn btn-danger" type="submit"><FaHeart /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    );
}

export default CakeDetails;
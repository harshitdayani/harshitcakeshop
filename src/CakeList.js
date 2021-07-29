import Cake from "./Cake";
import { GiCook } from 'react-icons/gi';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from "./Loading/loading";
import toastr from 'toastr';

const CakeList = (props) => {
    var [cakes, setCakes] = useState([]);
    var [loadingBool, setLoadingBool] = useState(true);

    useEffect(() => {
        let apiurl = process.env.REACT_APP_BASE_API_URL + "/allcakes";
        axios({
            url: apiurl,
            method: "get"
        }).then((response) => {
            setLoadingBool(false);
            
            setCakes(response.data.data);
            toastr.options = {
                positionClass: 'toast-top-full-width',
                hideDuration: 300,
                timeOut: 4000
            }
            toastr.clear();
            setTimeout(() => toastr.success(`Welcome to the Cake Gallery.`), 300);

        }, (error) => {
            console.log("Response from cake api: ", error);
        });
    }, []);

    console.log("Response from cake API: ", cakes);

    let cakeHTML;
    if (cakes.length > 0) {
        cakeHTML = cakes.map((each, index) => (
            <Cake history={props.history} cake={each} key={index} />
        ));
    } else {
        cakeHTML = <div className="text-dark text-center display-4 w-100">
            <em>
                All the cakes are sold. <br />
                Wait, we are preparing <GiCook /> more for you.
            </em>
        </div>
    }

    return (
        <div className="container mb-5">
            <div className="row product-list">
                {loadingBool ? <Loading /> : cakeHTML}
            </div>
        </div>
    );
}

export default CakeList;
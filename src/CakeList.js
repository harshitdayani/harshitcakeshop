import Cake from "./Cake";
import { GiCook } from 'react-icons/gi';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CakeList = (props) => {
    var [cakes, setCakes] = useState([]);

    useEffect(() => {
        let apiurl = process.env.REACT_APP_BASE_API_URL + "/allcakes";
        axios({
            url: apiurl,
            method: "get"
        }).then((response) => {
            setCakes(response.data.data);
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
                {cakeHTML}
            </div>
        </div>
    );
}

export default CakeList;
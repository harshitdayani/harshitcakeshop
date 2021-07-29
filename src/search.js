import axios from "axios";
import queryString from "query-string";
import { useEffect, useState } from "react";
import Cake from "./Cake";
import Loading from "./Loading/loading";
import toastr from 'toastr';

const Search = (props) => {
    var [searchCakes, setSearchCakes] = useState([]);
    var [loadingBool, setLoadingBool] = useState(true);
    let query = queryString.parse(props.location.search).q;
    console.log("Query is : ", query);

    useEffect(() => {
        console.log("Query Changed : ", query);
        let apiurl = process.env.REACT_APP_BASE_API_URL + "/searchcakes?q=" + query;
        axios({
            url: apiurl,
            method: "get"
        }).then((response) => {
            setLoadingBool(false);
            console.log("Cake Search : ", response.data);
            setSearchCakes(response.data.data);

            toastr.options = {
                positionClass: 'toast-top-full-width',
                hideDuration: 300,
                timeOut: 4000
            }
            toastr.clear();
            setTimeout(() => toastr.success(`Your searched cakes are ready.`), 300);

        }, (error) => {
            console.log("Search Error : ", error);
        });
    }, [query]);

    let searchCakeHTML;
    if (searchCakes.length > 0) {
        searchCakeHTML = searchCakes.map((each, index) => (
            <Cake cake={each} key={index} />
        ));
    } else {
        searchCakeHTML = <div className="text-dark text-center display-4 w-100">
            <em>
                Your search has {searchCakes.length} results.
            </em>
        </div>
    }
    return (
        loadingBool ?
        <Loading /> 
        :

        <div className="container my-5">
            <div className="row product-list">
                {searchCakeHTML}
            </div>
        </div>  

    );
}

export default Search;
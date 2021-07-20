// import axios from "axios";
import queryString from "query-string";
import { useEffect } from "react";

const Search = (props) => {
    let query = queryString.parse(props.location.search);
    console.log("Query is : ", query);
    
    useEffect(() => {
        console.log("Query Changed : ", query);
        let apiurl = process.env.REACT_APP_BASE_API_URL + "/searchcakes?q=" + query.q;
    }, [query.q]);

    return (
        <div>
            Search query : {props.searchquery}
        </div>
    );
}

export default Search;
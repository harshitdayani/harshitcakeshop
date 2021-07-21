// import axios from "axios";
import queryString from "query-string";
// import { useEffect } from "react";

const Search = (props) => {
    let query = queryString.parse(props.location.search);
    console.log("Query is : ", query);

    // useEffect(() => {
    //     console.log("Query Changed : ", query);
    //     let apiurl = process.env.REACT_APP_BASE_API_URL + "/searchcakes?q=" + query.q;
    // }, [query.q]);

    return (
        <div className="container text-center">
            <h1>
                Search for {query.q}
            </h1>
        </div>
    );
}

export default Search;
// import axios from "axios";
// import { useEffect } from "react";

const CakeDetails = (props) => {

    // useEffect(() => {
    //     let apiurl = process.env.REACT_APP_BASE_API_URL + "/cake/" + props.match.params.cakeid;
    // });

    return (
        <div className="container text-center">
            <h1>Cake Details page : {props.match.params.cakeid}</h1>
        </div>
    );
}

export default CakeDetails;
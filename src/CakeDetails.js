// import axios from "axios";

import { useEffect } from "react";

const CakeDetails = (props) => {

    useEffect(() => {
        let apiurl = process.env.REACT_APP_BASE_API_URL + "/cake/" + props.match.params.cakeid;
    });

    return (
        <div>Cake Details page : {props.match.params.caakeid}</div>
    );
}

export default CakeDetails;
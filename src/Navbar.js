import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import CakeBrand from "./assets/CakeBrand.png";

function Navbar(props) {

    console.log(">>>>>>", props);

    let [searchText, setSearchText] = useState("");

    let handleSearchText = (event) => {
        setSearchText(event.target.value);
    }

    let search = () => {
        // e.preventDefault();
        console.log(searchText);
        props.history.push("/search?q=" + searchText);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><img className="cakeBrand" src={CakeBrand} alt="Cake Brand" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active">
                        <Link to="/home" className="nav-link" >Home <span className="sr-only">(current)</span> </Link>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" href="#">About</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" href="#">Contact</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" href="#">Cake Customization</p>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <div className="form-inline">
                        <input value={searchText} onChange={handleSearchText} className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button onClick={search} className="btn btn-success" type="submit">Search</button>
                    </div>
                </span>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);
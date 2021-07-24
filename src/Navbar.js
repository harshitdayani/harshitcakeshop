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
                        <p className="nav-link">About</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link">Contact</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link">Cake Customization</p>
                    </li>

                </ul>
                <span className="navbar-text">
                    <div className="form-inline">
                        <input value={searchText} onChange={handleSearchText} className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button onClick={search} className="btn btn-success" type="submit">Search</button>

                        {props.isUserLoggedIn &&
                            <p className="m-sm-2">
                                <button className="btn btn-primary" type="submit">Cart</button>
                            </p>}

                        {props.isUserLoggedIn &&
                            <p className="m-sm-2">
                                <button className="btn btn-danger" type="submit">Logout</button>
                            </p>}

                        {!props.isUserLoggedIn &&
                            <Link to="/login">
                                <p className="m-sm-2">
                                    <button className="btn btn-primary" type="submit">Login</button>
                                </p>
                            </Link>}
                    </div>

                </span>

                {/* <ul className="navbar-nav mr-auto ">
                    {props.isUserLoggedIn &&
                        <li className="nav-item">
                            <p className="nav-link">
                                <button className="btn btn-danger" type="submit">Logout</button>
                            </p>
                        </li>}

                    {props.isUserLoggedIn &&
                        <li className="nav-item">
                            <p className="nav-link">
                                <button className="btn btn-success" type="submit">Cart</button>
                            </p>
                        </li>}
                </ul> */}
            </div>
        </nav >
    );
}

export default withRouter(Navbar);
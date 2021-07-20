import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

    console.log(props);

    let [searchText, setSearchText] = useState("");

    let handleSearchText = (e) => {
        setSearchText(e.target.value);
    }

    let search = () => {
        // props.fun(searchText);
        console.log(searchText);
        props.history.push("/search?q=" + searchText);
    }

    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand" >Navbar</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/home"> <p className="nav-link" >Home <span className="sr-only">(current)</span></p> </Link>
                </li>
                <li className="nav-item">
                    <p className="nav-link" >About</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link" >Contact</p>
                </li>
                {/* <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                    </p>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <p className="dropdown-item" >Action</p>
                        <p className="dropdown-item" >Another action</p>
                        <p className="dropdown-item" >Something else here</p>
                    </div>
                </li> */}

                <li>
                    <div className="form-inline">
                        <input value={searchText} onChange={handleSearchText} className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button onClick={search} className="btn btn-success" type="submit">Search</button>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    );
}
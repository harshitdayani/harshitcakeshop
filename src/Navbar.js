

export default function Navbar() {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand" >Navbar</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <p className="nav-link" >Home <span className="sr-only">(current)</span></p>
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
            </ul>
        </div>
    </nav>
    );
}
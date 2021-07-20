import { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    var [errorMessage, setErrorMessage] = useState();
    let user = {};
    useEffect(() => {
        // alert("Component Mounted");
    }, [errorMessage]);

    var login = function () {
        console.log("User has entered: ", user);
        setErrorMessage(Date.now());

        let apiurl = "https://apifromashu.herokuapp.com/api/login";
        axios({
            url: apiurl,
            method: "post",
            data: user
        }).then((response) => {
            console.log("Response from login api: ", response);
        }, (error) => {
            console.log("Response from login api: ", error);
        });
    }

    var handleEmail = function (e) {
        user.email = e.target.value;
    }

    var handlePassword = function (e) {
        user.password = e.target.value;
    }

    return (
        <div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input onChange={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}

            <button type="submit" onClick={login} className="btn btn-primary">Login</button>

        </div>
    );
}

export default Login;
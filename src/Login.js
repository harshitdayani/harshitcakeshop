import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import LoginImage from "./assets/login.jpg";

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
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src={LoginImage} id="icon" alt="User Icon" />
                </div>

                <div>
                    <input onChange={handleEmail} type="text" className="form-control fadeIn second" id="login" aria-describedby="emailHelp" placeholder="Enter email" />
                    <input onChange={handlePassword} type="text" className="form-control fadeIn third" id="password" placeholder="Password" />
                    <input type="submit" value="Log In" onClick={login} className="fadeIn fourth" />
                </div>

                <div id="formFooter">
                    <p class="underlineHover">Forgot Password?</p>
                    <Link className="nav-link" to="/signup"><p className="underlineHover">Create Account</p></Link>
                </div>

            </div>
        </div>
    );
}

export default Login;
import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import LoginImage from "./assets/login.jpg";
import Loading from './Loading/loading';
import toastr from 'toastr';

const Login = (props) => {
    const routeHistory = useHistory();
    var [loadingBool, setLoadingBool] = useState(true);

    var [errorMessage, setErrorMessage] = useState('');
    let user = {};
    // useEffect(() => {
    // }, [errorMessage]);

    var login = function (event) {
        event.preventDefault();
        setLoadingBool(false);

        let apiurl = "https://apifromashu.herokuapp.com/api/login";
        console.log(">>>>>", user.email, user.password);

        if (user.email !== undefined && user.password !== undefined) {

            axios({
                url: apiurl,
                method: "post",
                data: user
            }).then((response) => {
                if (response.data.token) {
                    props.loggedin();
                    localStorage.token = response.data.token;
                    routeHistory.push("/");

                    toastr.options = {
                        positionClass: 'toast-top-full-width',
                        hideDuration: 300,
                        timeOut: 60000
                    }
                    toastr.clear();
                    setTimeout(() => toastr.success(`Welcome ${response.data.name}. You are logged in successfully.`), 300);

                } else {
                    alert("Invalid Credentials");
                }
            }, (error) => {
                setLoadingBool(true);
                console.log("Response from login api: ", error);
                toastr.options = {
                    positionClass: 'toast-top-full-width',
                    hideDuration: 300,
                    timeOut: 60000
                }
                toastr.clear();
                setTimeout(() => toastr.success(`${error}`), 300)
            });

        } else {
            setLoadingBool(true);
            setErrorMessage("Please enter correct email and password");
        }
    }

    const handleEmail = function (e) {
        user.email = e.target.value;
    }

    const handlePassword = function (e) {
        user.password = e.target.value;
    }

    return (
        loadingBool ?
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src={LoginImage} id="icon" alt="User Icon" />
                    </div>

                    <div>
                        <input onChange={handleEmail} type="text" className="form-control fadeIn second" id="login" aria-describedby="emailHelp" placeholder="Enter email" />
                        <input onChange={handlePassword} type="text" className="form-control fadeIn third" id="password" placeholder="Password" />
                        {errorMessage ? <div className="text-danger my-2">{errorMessage}</div> : null}
                        <input type="submit" value="Log In" onClick={login} className="fadeIn fourth" />
                    </div>

                    <div id="formFooter">
                        <p class="underlineHover">Forgot Password?</p>
                        <Link className="nav-link" to="/signup"><p className="underlineHover">Create Account</p></Link>
                    </div>

                </div>
            </div>
            :

            <Loading />

    );
}

export default Login;
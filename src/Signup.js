import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Register from "./assets/register.jpg";
import { useState } from 'react';
import Loading from './Loading/loading';
import toastr from 'toastr';

const Signup = () => {
    let user = {};
    const routeHistory = useHistory();
    var [loadingBool, setLoadingBool] = useState(true);
    var [errorMessage, setErrorMessage] = useState('');

    var signup = function () {
        setLoadingBool(false);
        console.log("User has entered: ", user);

        let apiurl = "https://apifromashu.herokuapp.com/api/register";

        if (user.email !== undefined && user.password !== undefined && user.name !== undefined) {

            axios({
                url: apiurl,
                method: "post",
                data: user
            }).then((response) => {
                console.log("Response from login api: ", response);
                if (response) {
                    routeHistory.push("/");
                    toastr.options = {
                        positionClass: 'toast-top-full-width',
                        hideDuration: 300,
                        timeOut: 60000
                    }
                    toastr.clear();
                    setTimeout(() => toastr.success(`${response.data.message}`), 300);
                }

            }, (error) => {
                console.log("Response from login api: ", error);
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
            setErrorMessage("Please enter all details.");
        }

    }

    var handleName = function (e) {
        user.name = e.target.value;
    }

    var handleEmail = function (e) {
        user.email = e.target.value;
    }

    var handlePassword = function (e) {
        user.password = e.target.value;
    }

    return (
        loadingBool ?
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src={Register} id="icon" alt="Register" />
                    </div>

                    <div>
                        <input onChange={handleName} type="text" className="form-control fadeIn second" id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
                        <input name="email" onChange={handleEmail} type="text" className="form-control fadeIn third" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <input name="password" onChange={handlePassword} type="text" className="form-control fadeIn fourth" id="password" placeholder="Password" />
                        {errorMessage ? <div className="text-danger my-2">{errorMessage}</div> : null}
                        <input type="submit" value="Register" onClick={signup} className="fadeIn fifth" />
                    </div>

                    <div id="formFooter">
                        <Link className="nav-link" to="/login"><p className="underlineHover">Login</p></Link>
                    </div>

                </div>
            </div>
            :

            <Loading />

    );
}

export default Signup;
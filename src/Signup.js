import axios from 'axios';
import { Link } from 'react-router-dom';
import Register from "./assets/register.jpg";

const Signup = () => {
    let user = {};

    var signup = function () {
        console.log("User has entered: ", user);

        let apiurl = "https://apifromashu.herokuapp.com/api/register";
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
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src={Register} id="icon" alt="Register" />
                </div>

                <div>
                    <input onChange={handleName} type="text" className="form-control fadeIn second" id="name" aria-describedby="emailHelp" placeholder="Enter Name" />
                    <input name="email" onChange={handleEmail} type="text" className="form-control fadeIn third" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <input name="password" onChange={handlePassword} type="text" className="form-control fadeIn fourth" id="password" placeholder="Password" />
                    <input type="submit" value="Register" onClick={signup} className="fadeIn fifth" />
                </div>

                <div id="formFooter">
                    <Link className="nav-link" to="/login"><p className="underlineHover">Login</p></Link>
                </div>

            </div>
        </div>

    );
}

export default Signup;
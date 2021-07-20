// import { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="name" onChange={handleName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="email" onChange={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password" onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <button type="submit" onClick={signup} className="btn btn-primary">Sign Up</button>

        </div>
    );
}

export default Signup;
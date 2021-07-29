import axios from 'axios';
import toastr from 'toastr';
import Loading from './Loading/loading';
import { useState } from 'react';

const ForgotPassword = (props) => {
    let user = {}
    var [loadingBool, setLoadingBool] = useState(true);

    const handleEmail = (event) => {
        user.email = event.target.value
    }

    const recover = (event) => {
        // updating the state
        event.preventDefault();
        setLoadingBool(false);

        console.log(user.email)
        if (user.email === " " || user.email === undefined) {
            setLoadingBool(true);

            toastr.options = {
                positionClass: 'toast-top-full-width',
                hideDuration: 300,
                timeOut: 60000
            }
            toastr.clear();
            setTimeout(() => toastr.success(`Enter your email id.`), 300);

        } else {
            let apiUrl = process.env.REACT_APP_BASE_API_URL + "/recoverpassword";

            axios({
                method: "post",
                url: apiUrl,
                data: user
            }).then((response) => {
                console.log(response);

                if (response) {
                    // props.history.push("/Login");
                    setLoadingBool(true);

                    toastr.options = {
                        positionClass: 'toast-top-full-width',
                        hideDuration: 300,
                        timeOut: 60000
                    }
                    toastr.clear();
                    setTimeout(() => toastr.success(`${response.data.message}`), 300);

                }

            }, (error) => {
                setLoadingBool(true);

                toastr.options = {
                    positionClass: 'toast-top-full-width',
                    hideDuration: 300,
                    timeOut: 60000
                }
                toastr.clear();
                setTimeout(() => toastr.success(`${error}`), 300);
            })
        }
    }


    return (
        loadingBool ?
            <div className="bg-light rounded p-5 mt-5 shadow" style={{ width: "50%", margin: "auto" }}>
                <form className="mt-2">
                    <h1>Recover Password</h1>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={handleEmail} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div>
                        <button onClick={recover} type="submit" className="btn btn-primary mt-3">Recover Password</button>
                    </div>
                </form>
            </div>
            :

            <Loading />
    )
}


export default ForgotPassword;
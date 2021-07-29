import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
    <div className="container text-center">
        <div className="row h4">
            <div className="col-12">
                <ReactLoading type="balls" color="black" height={'20%'} width={'20%'} />
            </div>
        </div>
    </div>

);

export default Loading;
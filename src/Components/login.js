import React from 'react';
import './login.css';

const Login = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8 col-sm-12">
                    <div className="card login">
                        <div className="card-body">
                            <div className="card-title">
                                <p className="text-center h4">Sign Up</p>
                            </div>
                            <hr />
                            <div className="card-body">
                                <form action="">
                                    <div className="row m-3">
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" id="username"
                                                placeholder="Please Enter Username" /></div>
                                    </div>
                                    <div className="row m-3 pt-3">
                                        <div className="col-sm-12">
                                            <input type="number" className="form-control" id="phoneNumber"
                                                placeholder="Please Enter Your Number" /></div>
                                    </div>
                                    <div className="row m-3 pt-3">
                                        <div className="col-4">
                                            <button className="btn btn-success" type="button">Get otp</button>
                                        </div>
                                        <div className="col-7 offset-1 response-text">

                                        </div>
                                    </div>
                                    <div className="row m-3 pt-3">
                                        <div className="col-sm-12">
                                            <input type="number" className="form-control" id="otp"
                                                placeholder="OTP" /></div>
                                    </div>
                                    <div className="row m-3 pt-3">
                                        <div className="col-4">
                                            <button className="btn btn-primary" type="submit">Sign Up</button>
                                        </div>
                                        <div className="col-4">
                                            <button className="btn btn-danger" type="reset">Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

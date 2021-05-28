import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import * as apicalls from "../APICalls/apicalls";
import Alert from "./Alert";
import { useHistory } from "react-router";
import { MyContext } from "../Context/MyContext";

const Login = () => {
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [isDis, setIsDis] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [context, setContext] = useContext(MyContext);
  const { push } = useHistory();
  useEffect(() => {
    localStorage.clear();
  }, []);
  const validate = async () => {
    if (text.trim() !== "" && phone.length === 10 && !isNaN(+phone)) {
      setContext({
        loading: true,
        opacity: "0.5",
      });
      let response = await apicalls.validate(phone);
      setContext({
        loading: false,
        opacity: "1",
      });
      if (response.code === "green") {
        setIsDis(true);
        setOtp("");
        setShowOtp(true);
        setModalText(`Your OTP is ${response.payload}`);
        toggle();
      }
    } else {
      setError("Invalid Entries");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 600);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.toString() === "0000") {
      const user = {};
      user.name = text;
      user.phone = phone;
      user.images = [];
      setContext({
        loading: true,
        opacity: "0.5",
      });
      let response = await apicalls.signUp(user);
      setContext({
        loading: false,
        opacity: "1",
      });
      if (response.code === "green") {
        console.log(response);
        localStorage.setItem("token", response.token);
        localStorage.setItem("name", response.name);
        localStorage.setItem("phone", response.phone);
        push("/welcome");
      } else {
        setModalText(response.message + " Please refresh the page");
        toggle();
      }
    } else {
      setError("Invalid OTP");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 600);
    }
  };

  const toggle = () => setModal(!modal);

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
                <form action="" onSubmit={handleSubmit}>
                  <div className="row m-3">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control bg-warning"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        id="username"
                        disabled={isDis}
                        placeholder="Please Enter Username"
                      />
                    </div>
                  </div>
                  <div className="row m-3 pt-3">
                    <div className="col-sm-12">
                      <input
                        type="number"
                        className="form-control bg-warning"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="phoneNumber"
                        disabled={isDis}
                        placeholder="Please Enter Your Number"
                      />
                    </div>
                  </div>
                  <div className="row m-3 pt-3">
                    <div className="col-12">
                      <button
                        className="btn btn-success"
                        type="button"
                        onClick={validate}
                      >
                        Get otp
                      </button>
                    </div>
                  </div>
                  {showError && (
                    <div className="row m-3 pt-3">
                      <div className="col-12">
                        <button class="btn btn-light btn-block">{error}</button>
                      </div>
                    </div>
                  )}
                  {showOtp && (
                    <>
                      <div className="row m-3 pt-3">
                        <div className="col-sm-12">
                          <input
                            type="number"
                            className="form-control bg-warning"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="OTP"
                          />
                        </div>
                      </div>
                      <div className="row m-3 pt-3">
                        <div className="col-12">
                          <button className="btn btn-primary" type="submit">
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Alert modal={modal} toggle={toggle} text={modalText} />
    </>
  );
};

export default Login;

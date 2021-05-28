import React, { useEffect, useRef } from "react";
import { images } from "../shared/images";
import "./home.css";
import * as apicalls from "../APICalls/apicalls";
import TinderCard from "react-tinder-card";
import { getDateAndTime } from "../HelperMethods/getDateandTime";
import { useHistory } from "react-router";
import Timer from "./Timer";

const Home = () => {
  const [im, setIm] = React.useState([...images].reverse());
  const [display, setDisplay] = React.useState("none");
  const phone = localStorage.getItem("phone");
  const [finished, setFinished] = React.useState(false);
  const [isdisabled, setisdisabled] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const { push } = useHistory();
  const imgs = useRef(images);
  const update = () => {
    imgs.current.pop();
  };
  useEffect(() => {
    if (phone === undefined || phone === "" || phone === null) {
      alert("Access denied");
      localStorage.clear();
      push("/login");
    }
  }, []);
  const swipe = async (direction, obj) => {
    imgs.current.pop();
    console.log(imgs.current);
    // if (direction === "left") {
    //   direction = "accepted";
    // } else if (direction === "right") {
    //   direction = "rejected";
    // }
    // const { date, time } = getDateAndTime();
    // let image = { date, time };
    // image.name = obj.name;
    // image.status = direction;
    // let response = await apicalls.update(image, phone);
    // console.log(response);
  };

  const clear = () => {
    localStorage.clear();
    push("/login");
  };

  let [time, setTime] = React.useState(5);
  const startTimer = () => {
    var decrement = () => {
      setTime(--time);
      if (time <= 0) {
        clearInterval(interval);
        update();
      }
    };
    var interval = setInterval(decrement, 1000);
  };

  return (
    <div className="home">
      <nav className="navbar navbar-exapnd-lg navbar-light bg-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            <button
              className="btn btn-success"
              disabled={isdisabled}
              onClick={() => {
                setisdisabled(true);
                startTimer();
              }}
            >
              Start Timer
            </button>
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <p className="h4">Timer : {time}</p>
            </li>
          </ul>
        </div>
      </nav>

      <div className="message" style={{ display: display }}>
        {message}
      </div>

      {!finished ? (
        <div className="row justify-content-center">
          {im.map((i, index) => {
            return (
              <TinderCard
                onSwipe={(direction) => {
                  swipe(direction, i);
                }}
                preventSwipe={["up", "down"]}
              >
                <div className="card img-card p-3" key={index}>
                  <div className="card-text p-3">
                    <p className="text-center h3">{i.name}</p>
                  </div>
                  <img src={i.url} alt="" className="card-img-top img" />
                </div>
              </TinderCard>
            );
          })}
        </div>
      ) : (
        <div className="container m-5 p-5">
          <p class="h6">
            You have rated all the images. You can check your ratings below or
            rate again with different phone number
          </p>
          <div class="row mt-5">
            <div class="col-sm-8">
              {images.map((i, index) => {
                return (
                  <div class="card mb-3">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="card m-5">
                          <img src={i.url} alt="" class="card-img-top" />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="m-5">
                          <p class="h6">Name : {i.name}</p>
                          <p class="h6">Status : </p>
                          <p class="h6">Date :</p>
                          <p class="h6">Time :</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="btn btn-success mt-5" onClick={clear}>
            Try Again With Different Number
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

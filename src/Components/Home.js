import React, { useEffect, useRef } from "react";
import { images } from "../shared/images";
import "./home.css";
import * as apicalls from "../APICalls/apicalls";
import TinderCard from "react-tinder-card";
import { getDateAndTime } from "../HelperMethods/getDateandTime";
import { useHistory } from "react-router";

const Home = () => {
  const [im, setIm] = React.useState([...images].reverse());
  const [display, setDisplay] = React.useState("none");
  const phone = localStorage.getItem("phone");
  const [finished, setFinished] = React.useState(false);
  const [isdisabled, setisdisabled] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [history, setHistory] = React.useState([]);
  const { push } = useHistory();
  const imgs = useRef(images);
  const user = localStorage.getItem("name");
  const update = () => {
    im.pop();
    setIm(im);
    imgs.current.shift();
  };
  useEffect(async () => {
    let response = await apicalls.getHistory(phone);
    if (response.payload.length) {
      // alert("You have already rated");
      setFinished(true);
      setHistory(response.payload);
    }
    if (phone === undefined || phone === "" || phone === null) {
      alert("Access denied");
      localStorage.clear();
      push("/login");
    }
  }, []);
  const swipe = async (direction, obj) => {
    if (direction === "left") {
      direction = "accepted";
    } else if (direction === "right") {
      direction = "rejected";
    }
    update();
    setMessage(user + " have " + direction + " image " + obj.name);
    setDisplay("block");
    setTimeout(() => {
      setDisplay("none");
    }, 1500);
    console.log(imgs.current, direction, im);
    if (!imgs.current.length) {
      setFinished(true);
      let response = await apicalls.getHistory(phone);
      console.log(response);
      setHistory(response.payload);
    }

    const { date, time } = getDateAndTime();
    let image = { date, time };
    image.name = obj.name;
    image.status = direction;
    image.url = obj.url;
    let response = await apicalls.update(image, phone);
    console.log(response);
  };

  const clear = () => {
    localStorage.clear();
    push("/login");
  };

  let [time, setTime] = React.useState(25);
  const startTimer = () => {
    var decrement = () => {
      setTime(--time);
      if (time % 5 == 0) {
        clearInterval(interval);
        if (im.length) {
          swipe("ignored", im[im.length - 1]);
        }
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
                startTimer(5);
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
              {history.map((i, index) => {
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
                          <p class="h6">Status : {i.status}</p>
                          <p class="h6">Date : {i.date}</p>
                          <p class="h6">Time : {i.time}</p>
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

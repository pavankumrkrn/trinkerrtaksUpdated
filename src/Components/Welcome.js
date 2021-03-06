import React, { useEffect } from "react";
import { useHistory } from "react-router";
import "./welcome.css";

const Welcome = () => {
  const name = localStorage.getItem("name");
  const { push } = useHistory();
  useEffect(() => {
    if (name === undefined || name === "" || name === null) {
      alert("Access denied");
      localStorage.clear();
      push("/login");
    }
  }, []);

  return (
    <div className="welcome">
      <p className="text-left h5 mb-5">Welcome {name},</p>
      <div className="mb-5">
        <p>
          Thanks for signing-up, in this app you will be provided 5 images. You
          can rate them by swiping left or right. Swipe left if you accept them
          and right if you don't.
        </p>
        <p>You will have 5 seconds to rate each image,</p>
        <p>A timer will be running for that.</p>
        <p>
          Please don't close the window in between as you can't re-login with
          same phone number again
        </p>
        <p>
          You can also view your rating history by navigating to
          <b> "Rating History".</b>
        </p>
      </div>
      <button
        className="btn btn-success btn-outline-warning btn-lg"
        type="button"
        onClick={() => push("/home")}
      >
        START
      </button>
    </div>
  );
};

export default Welcome;

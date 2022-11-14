import React from "react";
import userImg from "../assets/images/image-jeremy.png";

const UserBox = ({ onChange, time }) => {
  const timeValues = ["daily", "weekly", "monthly"];
  const btns = timeValues.map((item, i) => {
    return (
      <li key={i}>
        <button className={item === time ? "active" : ""} onClick={onChange}>
          {item}
        </button>
      </li>
    );
  });
  return (
    <div className="user-box">
      <div className="user-content">
        <img src={userImg} alt="user " />
        <div className="title">
          <span>Report for</span> <h3>Jeremy Robson</h3>
        </div>
      </div>
      <div className="user-time">
        <ul>
          {btns}
          {/*  <li>
            <button className="active" onClick={onChange}>
              Daily
            </button>
          </li>
          <li>
            <button onClick={onChange}>Weekly</button>
          </li>
          <li>
            <button onClick={onChange}>Monthly</button>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default UserBox;

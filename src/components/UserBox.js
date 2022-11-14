import React from "react";
import userImg from "../assets/images/image-jeremy.png";

const UserBox = () => {
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
          <li>
            <button className="active">Daily</button>
          </li>
          <li>
            <button>Weekley</button>
          </li>
          <li>
            <button>Monthly</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserBox;

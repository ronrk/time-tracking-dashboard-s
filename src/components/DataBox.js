import React from "react";
import img from "../assets/images/icon-work.svg";
import elipsis from "../assets/images/icon-ellipsis.svg";

const DataBox = ({ title, timeframes, time }) => {
  const { current, previous } = timeframes[time];

  return (
    <div className={`data-box ${title.toLowerCase()}`}>
      <div className="bg"></div>
      <div className="box-container">
        <div className="header">
          <h3>{title}</h3>
          <img src={elipsis} alt="" />
        </div>
        <div className="data">
          <span className="current">{current}hrs</span>
          <span className="previous">
            Last{" "}
            {time === "daily" ? "Day" : time === "weekly" ? "Week" : "Month"} -{" "}
            {previous}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default DataBox;

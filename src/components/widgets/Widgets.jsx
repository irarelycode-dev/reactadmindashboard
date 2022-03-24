import React from "react";
import "./widgets.scss";

const Widgets = () => {
  return (
    <div className="widget">
      <div className="left">
          <span className="title">USERS</span>
          <span className="counter">21313</span>
          <span className="link">See all users</span>
      </div>
      <div className="right">
          <div className="percentage">20%</div>
          
      </div>
    </div>
  );
};

export default Widgets;

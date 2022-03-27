import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import "./widgets.scss";

const Widgets = ({ type }) => {
  let data;
  let amount = 100;
  let percentage = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon className="icon" style={{ color: "crimson" }} />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ color: "green" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See all earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: "blue" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See balance",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ color: "red" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {percentage}
        </div>
        {data && data.icon}
      </div>
    </div>
  );
};

export default Widgets;

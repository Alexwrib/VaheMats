import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpeg";
import { dispatch } from "../../redux/hooks";
import { reviewMiddleware } from "../../redux/slices/review";
const Header = () => {
  const [date, setDate] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(
        `${new Date().getHours()}/${new Date().getMinutes()}/${new Date().getSeconds()}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <img src={logo} alt="logo" style={{ width: "50px" }} />
      <select name="cars" id="cars">
        <option
          value="en"
          onClick={(e) => {
            dispatch(reviewMiddleware.handleChangeLanguage("en"));
          }}
        >
          EN
        </option>
        <option
          value="ru"
          onClick={(e) => {
            dispatch(reviewMiddleware.handleChangeLanguage("ru"));
          }}
        >
          RU
        </option>
      </select>
      <p>{date}</p>
    </div>
  );
};

export default Header;

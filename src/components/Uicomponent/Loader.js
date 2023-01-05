import React from "react";
import Loader from '../../images/Loader.gif'
import "./Loader.css";
const Loading = () => {
  return <div className="loading-modal">
    <img src={Loader} alt="" />
  </div>;
};

export default Loading;

import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Products from "../Products/Product";

const Home = () => {
  return (
    <div>
      <div className="main-content">
        <div className="layout">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Homepage.css";
import Product from "./Product";

function Homepage() {
  return (
    <div>
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="homeImage"
      />

      <div className="home__row">
        <Product />
        {/* product */}
      </div>
      <div className="home__row">
        {/* product */}
        {/* product */}
        {/* product */}
      </div>
      <div className="home__row">{/* product */}</div>
    </div>
  );
}

export default Homepage;

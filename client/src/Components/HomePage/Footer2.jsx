import React from "react";
import "./Footer2.css";
import scooter from "../../utils/scooter.png";
const Footer2 = () => {
  return (
    <section className="footer2__bg__color section ">
      <div className="section__item">
        <h1>Going somewhere?</h1>
        <p>Let's give you an opportunity to contribute now.</p>
        <div className="btn__wrapper">
          {/* <button>Offer a route</button> */}
        </div>
      </div>
      <div className="section__item">
        <div className="img__wrapper">
          <img src={scooter} alt="img" width="225rem" />
        </div>
      </div>
    </section>
  );
};

export default Footer2;

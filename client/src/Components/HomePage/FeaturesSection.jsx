import React from 'react';
import './FeatuesSection.css'; // import the Section styling
// import { FaUser, FaBook, FaFilm } from 'react-icons/fa'; // import the icons

function Section() {
  return (
    <section className="section">
      <div className="section__item">
        <div className="section__icon1"></div>
        <h2 className="section__heading">Hasel-free Pickup</h2>
        <p className="section__text">No more worrying about missed deliveries or inconvenient pickup locations. We'll bring your order right to your doorstep at a time that works for you.</p>
      </div>
      <div className="section__item">
        <div className="section__icon2"></div>
        <h2 className="section__heading">Real time tracking</h2>
        <p className="section__text">Our verified partner will ensure that your goods are transported safely to the destination. You can monitor the trip with live vehicle tracking and regular sms/email updates</p>
      </div>
      <div className="section__item">
        <div className="section__icon3"></div>
        <h2 className="section__heading">Choose vehicle of your choice</h2>
        <p className="section__text">Get quotes for vehicles which can carry from 20 kgs to 2000 kgs and book instantly without any waiting</p>
      </div>
    </section>
  );
}

export default Section;

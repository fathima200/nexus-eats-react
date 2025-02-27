import React, { useState } from "react";
import picture from "../../assets/image014.png"

const Reservation = () => {
  const [reservation, setReservation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservation(true);
  };

  return (
    <div>
      {reservation && (
        <section id="Orders">
          <div className="order">
            <div className="about-col-1">
              <img src={picture} alt="Restaurant Interior" />
            </div>
            <div className="reservation-form">
              <h2>Reservation Successful</h2>
              <div className="checkmark">
                <svg viewBox="0 0 100 100">
                  <path
                    d="M20 50l20 20 60 -60"
                    stroke="#fff"
                    strokeWidth="10"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="confetti-container">
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!reservation && (
        <section id="Orders">
          <div className="order">
            <div className="about-col-1">
              <img src={picture} alt="Restaurant Interior" />
            </div>
            <div className="reservation-form">
              <h3 className="reservation">Restaurant---</h3>
              <h2>Book A Table Online</h2>
              <form id="bookingForm">
                <div className="input-container">
                  <input type="text" id="name" placeholder="Your Name" required />
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="input-container">
                  <input type="datetime-local" id="datetime" required />
                  <select id="people">
                    <option>People 1</option>
                    <option>People 2</option>
                    <option>People 3</option>
                    <option>People 4</option>
                    <option>People 5</option>
                    <option>People 6</option>
                  </select>
                </div>
                <textarea id="request" placeholder="Special Request" defaultValue={""} />
                <button className="reserv-btn" type="submit" onClick={handleSubmit}>BOOK NOW</button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Reservation;



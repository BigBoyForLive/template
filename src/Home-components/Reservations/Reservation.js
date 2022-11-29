import React, {useState} from "react";
import "./Reservation.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
function Reservation() {
    const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className="metier">
        <div className="metier__heading">
          <div className="metier__heading__title">
            Reservez votre poste dès maintenant
          </div>
        </div>
        <div className="metier__body">
          <div className="metier__body__slider">
            <div className="metier__body__slider__calendar">
            <p className="calendar__title">Choisir une date</p>
              <Calendar onChange={onChange} value={value} />
            </div>
            <div className="metier__body__slider__input">
              <input type="time" className="calendar__input" placeholder="heure"/>
              <input type="number" className="calendar__input" placeholder="nombre d'heures"/>
              <button className="calendar__button">Reserver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;

import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { toast } from "react-toastify";

const AppointmentBanner = ({ date, setDate }) => {
  const onSelectedDate = (date) => {
    if (date.valueOf() < new Date().valueOf()) {
      toast.error("Please select a future date");
      return;
    }

    setDate(date);
  };

  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:max-w-sm w-full rounded-lg shadow-2xl"
          alt="Dentist Chair"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={onSelectedDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;

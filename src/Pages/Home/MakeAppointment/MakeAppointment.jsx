import React from 'react';
import { Link } from 'react-router';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from "../../../assets/images/appointments.png";
import visa from "../../../assets/images/visa.jpg";

const MakeAppointment = () => {
    return (
        <div>
        <div
          style={{
            background: `url(${visa})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            backgroundColor: "#000000b5",
          }}
          className=""
        >
          <div className="px-5 pt-10 md:pt-20 my-10">
            <div className="md:flex justify-between items-center">
              <div className="hidden  md:w-1/2 md:flex justify-end">
                <img
                  src={appointment}
                  className="mt-5 md:mt-0 p-2 md:p-0 md:w-4/6 md:h-[450px] rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:pe-5 pb-10 md:pb-0">
                <h1 className="text-2xl md:text-5xl  font-bold text-white">
                  Discover the world across key areas!
                </h1>
                <p className="py-6 text-white text-justify">
                  Make 2024 the year you discover word open community – where you
                  can live, learn, create and innovate at the heart of world. the
                  year you discover word open community – where you can live,
                  learn, create and innovate at the heart of world. Make 2024 the
                  year you discover word open community – where you can live,
                  learn, create and innovate at the heart of world. the year you
                  discover word open community – where you can live, learn, create
                  and innovate at the heart of world.
                </p>
                <Link to="/appointment">
                  {" "}
                  <PrimaryButton>Get Appointment</PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MakeAppointment;
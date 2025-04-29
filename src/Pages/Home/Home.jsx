import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import Infocards from "./InfoCards/Infocards";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Explore from "./Explore/Explore";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Infocards></Infocards>
      <Services></Services>
      <Explore></Explore>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

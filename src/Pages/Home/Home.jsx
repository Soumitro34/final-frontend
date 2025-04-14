import React from 'react';
import Banner from "./Banner/Banner";
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Infocards from './InfoCards/Infocards';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Infocards></Infocards>
        <Services></Services>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
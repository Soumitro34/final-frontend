import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import exploreImage from "../../../assets/images/education.jpg"
import { Link } from 'react-router';
const Explore = () => {
    return (
        <div className='md:mx-28 mx-3'>
             <div className='hero py-5 md:py-20'>
        <div className=' md:flex justify-between items-center gap-5 px-5'>
          <div className='md:w-1/2 mb-5'>
            <h1 className='text-2xl md:text-4xl  font-bold'>
              Explore the world with F1 Visa
            </h1>
            <p className='py-6'>
              Make 2024 the year you discover word open community – where you
              can live, learn, create and innovate at the heart of world. the
              year you discover word open community – where you can live, learn,
              create and innovate at the heart of world. Make 2024 the year you
              discover word open community – where you can live, learn, create
              and innovate at the heart of world. the year you discover word
              open community – where you can live, learn, create and innovate at
              the heart of world.
            </p>
           <div className="md:w-1/2"> <Link to="/appointment">
                  {" "}
                  <PrimaryButton>Get Started</PrimaryButton>
                </Link></div>
          </div>
          <img
            src={exploreImage}
            className='my-3 rounded-lg'
          />
        </div>
      </div>
        </div>
    );
};

export default Explore;
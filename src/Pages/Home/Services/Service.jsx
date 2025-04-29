import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router';

const Service = ({data}) => {
const{name, img, description} = data;
    return (
        <div className="p-5 shadow-sm bg-gradient-to-r from-primary to-secondary">

    <img className='rounded-2xl h-64'
      src={img}
      alt={name} />
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
 <div className='flex justify-center my-3'>
 <Link to="/appointment">
                  {" "}
                  <PrimaryButton>Get Appointment</PrimaryButton>
                </Link>
 </div>
</div>
    );
};

export default Service;
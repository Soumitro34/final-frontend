import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from './InfoCard';

const Infocards = () => {
const cardData = [
    {
        id: 1,
        name: "Opening Hours",
        description: "Open 9.00 am to 4.00 pm 5 Days",
        image: clock,
        bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
        id: 2,
        name: "Opening Location",
        description: "Baridhara, Road-13, House:321",
        image: location,
        bgClass: "bg-accent",
    },
    {
        id: 3,
        name: "Contact Us",
        description: "Open 9.00 am to 4.00 pm 5 Days",
        image: phone,
        bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
];
    return (
        <div className='grid grid-cols-3 gap-5 mx-auto'>
           {
            cardData.map((info) => (
            <InfoCard key={info.id} info={info}></InfoCard>
            ))}     
        </div>
    );
};

export default Infocards;
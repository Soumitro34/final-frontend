import React from 'react';

const InfoCard = ({info}) => {
    const {name, description, image, bgClass} = info;
    return (
           <div className={`${bgClass} rounded-2xl p-4 flex items-center shadow-sm`}>
  <figure>
    <img
      src= {image}
      alt={name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
  </div>
</div>
    );
};

export default InfoCard;
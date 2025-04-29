import React, { Children } from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className='border-2 btn btn-xs sm:btn-xm md:btn-md lg:btn-lg btn-primary text-white bg-gradient-to-r from-primary to-secondary shadow-xl w-full'>
      {children}
    </button>
  );
};

export default PrimaryButton;

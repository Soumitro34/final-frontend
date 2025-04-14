import React from 'react';
import { Link } from 'react-router';
import fourZeroFour from '../../../assets/images/404.gif';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <img
          src={fourZeroFour}
          alt="404 Not Found"
          className="w-full max-w-md mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 text-center mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to='/'>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Return to Home
        </button>
        </Link>
      </div>
    );
};

export default NotFound;
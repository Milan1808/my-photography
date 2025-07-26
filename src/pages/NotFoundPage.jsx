import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] bg-light-gray text-center px-4 py-16">
      <h1 className="text-9xl font-extrabold text-primary-purple">404</h1>
      <p className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">Page Not Found</p>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-8 py-4 bg-secondary-indigo text-white text-lg font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
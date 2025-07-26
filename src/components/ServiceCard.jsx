import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <img
        src={service.imageUrl}
        alt={service.name}
        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.name}</h3>
        <p className="text-gray-600 mb-4 text-base">{service.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold text-primary-purple">
            Starts from ₹{service.price.toLocaleString()}
          </span>
          <Link
            to={`/services#${service.name.toLowerCase().replace(/\s/g, '-')}`}
            className="px-5 py-2 bg-secondary-indigo text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
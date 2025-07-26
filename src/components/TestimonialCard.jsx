import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center justify-center">
      <blockquote className="text-lg italic text-gray-700 mb-6">
        "{testimonial.quote}"
      </blockquote>
      <p className="text-primary-purple font-semibold text-xl">- {testimonial.author}</p>
      {/* Optional: Add star ratings or client photo */}
      <div className="flex justify-center mt-4 text-yellow-400">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
      </div>
    </div>
  );
};

export default TestimonialCard;
import React from 'react';
// Make sure to put an image in src/assets/hero-bg.jpg or use a public URL
import heroBg from '../assets/hero-bg.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
      <div className="relative z-10 text-white text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fadeInDown">
          Your Story, Beautifully Captured
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-90 animate-fadeInUp delay-200">
          Professional photography services for unforgettable moments.
          From candid wedding shots to vibrant family portraits, we tell your unique tale.
        </p>
        <Link
          to="/book"
          className="inline-block px-10 py-5 bg-primary-purple text-white text-xl font-bold rounded-full hover:bg-purple-700 transition-all duration-500 transform hover:scale-105 shadow-xl animate-fadeInUp delay-400"
        >
          Book Your Session
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
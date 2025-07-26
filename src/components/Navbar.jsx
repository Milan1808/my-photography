import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 md:flex md:justify-between md:items-center">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-extrabold text-gray-800 hover:text-primary-purple transition-colors duration-300">
             Krishna Studio
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none focus:text-primary-purple"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-4 text-lg font-semibold rounded-md transition-colors duration-300 ${
                    isActive ? 'text-primary-purple bg-gray-100' : 'text-gray-700 hover:text-primary-purple hover:bg-gray-50'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `block py-2 px-4 text-lg font-semibold rounded-md transition-colors duration-300 ${
                    isActive ? 'text-primary-purple bg-gray-100' : 'text-gray-700 hover:text-primary-purple hover:bg-gray-50'
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block py-2 px-4 text-lg font-semibold rounded-md transition-colors duration-300 ${
                    isActive ? 'text-primary-purple bg-gray-100' : 'text-gray-700 hover:text-primary-purple hover:bg-gray-50'
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-4 text-lg font-semibold rounded-md transition-colors duration-300 ${
                    isActive ? 'text-primary-purple bg-gray-100' : 'text-gray-700 hover:text-primary-purple hover:bg-gray-50'
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-4 text-lg font-semibold rounded-md transition-colors duration-300 ${
                    isActive ? 'text-primary-purple bg-gray-100' : 'text-gray-700 hover:text-primary-purple hover:bg-gray-50'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="md:ml-4">
              <Link
                to="/book"
                className="block py-2 px-6 bg-primary-purple text-white text-lg font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300 text-center md:text-left mt-4 md:mt-0"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
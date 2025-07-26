import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-gray-300 py-10 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="col-span-1">
          <Link to="/" className="text-3xl font-extrabold text-white mb-4 block" />
            📸 Krishna Studio
          <p className="text-sm">
            Capturing life's most precious moments with passion and precision.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-facebook-f text-xl"></i> {/* Requires Font Awesome */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><Link to="/portfolio" className="hover:text-white transition-colors duration-300">Portfolio</Link></li>
            <li className="mb-2"><Link to="/services" className="hover:text-white transition-colors duration-300">Services</Link></li>
            <li className="mb-2"><Link to="/book" className="hover:text-white transition-colors duration-300">Book Appointment</Link></li>
            <li className="mb-2"><Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
            <li className="mb-2"><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul>
            <li className="mb-2"><Link to="/services#weddings" className="hover:text-white transition-colors duration-300">Wedding Photography</Link></li>
            <li className="mb-2"><Link to="/services#portraits" className="hover:text-white transition-colors duration-300">Portrait Sessions</Link></li>
            <li className="mb-2"><Link to="/services#events" className="hover:text-white transition-colors duration-300">Event Coverage</Link></li>
            <li className="mb-2"><Link to="/services#commercial" className="hover:text-white transition-colors duration-300">Commercial Shoots</Link></li>
            <li className="mb-2"><Link to="/services" className="hover:text-white transition-colors duration-300">Custom Packages</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <p className="mb-2"><i className="fas fa-map-marker-alt mr-2"></i> 123 Photo St, Vadodara, Gujarat, India</p>
          <p className="mb-2"><i className="fas fa-phone mr-2"></i> +91 98765 43210</p>
          <p className="mb-2"><i className="fas fa-envelope mr-2"></i> info@photopro.com</p>
          <p className="mb-2"><i className="fas fa-clock mr-2"></i> Mon - Sat: 9 AM - 6 PM</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} PhotoPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
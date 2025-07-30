import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 'weddings',
    name: 'Wedding Photography',
    description: 'We believe every wedding is a unique story waiting to be told. Our comprehensive wedding packages ensure every precious moment, from the grand ceremony to intimate details, is beautifully and timelessly captured. We offer pre-wedding shoots, candid photography, traditional photography, and cinematic videography options.',
    price: 'Starting from ₹50,000',
    includes: ['Full day coverage', 'Two photographers', 'High-resolution digital images', 'Online gallery', 'Custom album design'],
    imageUrl: 'https://images.unsplash.com/photo-1594951478546-f94d216f272a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'portraits',
    name: 'Portrait Sessions',
    description: 'Whether it\'s a professional headshot, a vibrant family portrait, a playful child session, or a stunning couple shoot, we create personalized portraits that truly reflect personality and emotion. Our sessions are relaxed and tailored to your vision.',
    price: 'Starting from ₹15,000',
    includes: ['1-2 hour session', 'Location of your choice', '20-30 edited digital images', 'Print release'],
    imageUrl: 'https://images.pexels.com/photos/370142/pexels-photo-370142.jpeg',
  },
  {
    id: 'events',
    name: 'Event Photography',
    description: 'Capturing the energy and excitement of your special events – be it a birthday party, corporate gathering, cultural festival, or private celebration. We blend into the background to capture genuine moments and ensure you have stunning memories of your occasion.',
    price: 'Starting from ₹30,000',
    includes: ['3-4 hours coverage', 'All usable digital images', 'Online proofing gallery', 'Event highlights video (optional add-on)'],
    imageUrl: 'https://images.pexels.com/photos/2608097/pexels-photo-2608097.jpeg',
  },
  {
    id: 'commercial',
    name: 'Commercial Photography',
    description: 'High-impact visuals for your business. From product photography and architectural shoots to corporate headshots and branding imagery, we help you showcase your brand professionally and effectively. Custom quotes based on project scope.',
    price: 'Custom Quote',
    includes: ['Initial consultation', 'Concept development', 'Professional lighting and equipment', 'High-resolution images with commercial license', 'Post-production editing'],
    imageUrl: 'https://images.pexels.com/photos/4245964/pexels-photo-4245964.jpeg',
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-light-gray py-16">
      <SectionHeader
        title="Our Comprehensive Photography Services"
        subtitle="Discover our tailored packages designed to beautifully capture every moment."
      />

      <div className="container mx-auto px-4">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            id={service.id} // Anchor for direct linking from Navbar
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center bg-white rounded-xl shadow-lg mb-16 overflow-hidden transform hover:scale-[1.005] transition-transform duration-300`}
          >
            <div className="md:w-1/2 w-full h-80 md:h-auto">
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.name}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
              <p className="text-xl font-semibold text-primary-purple mb-4">Price: {service.price}</p>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Package Includes:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {service.includes.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
              <Link
                to="/book"
                className="inline-block px-6 py-3 bg-secondary-indigo text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-md"
              >
                Book This Service
              </Link>
            </div>
          </div>
        ))}

        <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Need a Custom Package?</h3>
          <p className="text-lg text-gray-700 mb-6">
            If our standard packages don't quite fit your vision, we're happy to create a
            tailored solution just for you. Contact us to discuss your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-primary-purple text-white text-lg font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
          >
            Contact Us for Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
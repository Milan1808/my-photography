import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import PhotoGallery from '../components/PhotoGallery';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';

const services = [
  { id: 1, name: 'Weddings', description: 'Capture your special day with timeless elegance, from grand ceremonies to intimate moments.', imageUrl: 'https://images.pexels.com/photos/33006938/pexels-photo-33006938.jpeg?_gl=1*1mkcs8d*_ga*MTg5ODg0NTI1OS4xNzQ5NDQxOTEw*_ga_8JE65Q40S6*czE3NTMwMjMxNDEkbzIkZzEkdDE3NTMwMjM5OTkkajU0JGwwJGgw', price: 50000 },
  { id: 2, name: 'Portraits', description: 'Stunning individual, couple, or family portraits that reflect your unique personality and story.', imageUrl: 'https://images.unsplash.com/photo-1557022295-d2222379ed2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 15000 },
  { id: 3, name: 'Events', description: 'Professional coverage for all your memorable events – birthdays, corporate functions, and celebrations.', imageUrl: 'https://images.unsplash.com/photo-1540202404-58bc4499d3d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 30000 },
];

const testimonials = [
  { id: 1, quote: "PhotoPro made our wedding day unforgettable! The photos are absolutely breathtaking and truly capture every emotion.", author: "Preeti & Rohan Sharma" },
  { id: 2, quote: "My portrait session was so comfortable and fun. The photographer brought out my best self, and I cherish these photos!", author: "Aditi Singh" },
  { id: 3, quote: "We hired PhotoPro for our annual corporate gala, and their professionalism and quality of work were outstanding. Highly recommended!", author: "Anil Kapoor, CEO TechSolutions" },
];


const HomePage = () => {
  return (
    <div className="bg-light-gray">
      <HeroSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Photography Services"
            subtitle="We offer a diverse range of photography services tailored to your needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="px-8 py-4 bg-primary-purple text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Latest Creations"
            subtitle="Explore our recent projects and see the moments we've beautifully preserved."
          />
          {/* PhotoGallery component will use dummy images if 'images' prop is empty */}
          <PhotoGallery images={[]} />
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-primary-purple text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
            >
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Hear from our happy clients about their experience with PhotoPro."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-purple to-secondary-indigo text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fadeInDown">
            Ready to Capture Your Moments?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeInUp delay-200">
            Let's create timeless memories together.
          </p>
          <Link
            to="/book"
            className="inline-block px-10 py-5 bg-white text-primary-purple text-xl font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl animate-fadeInUp delay-400"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
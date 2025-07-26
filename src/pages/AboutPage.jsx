import React from 'react';
import SectionHeader from '../components/SectionHeader';

const AboutPage = () => {
  return (
    <div className="bg-light-gray py-16">
      <SectionHeader
        title="About PhotoPro"
        subtitle="Passionate storytellers capturing life's precious moments."
      />

      <div className="container mx-auto px-4 max-w-4xl bg-white rounded-xl shadow-2xl p-8 md:p-12 mb-16 animate-fadeInUp">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Founded in 20XX by [Your Name/Photographer's Name], PhotoPro began with a simple yet profound vision: to capture the fleeting beauty of life's most significant moments. What started as a personal passion for photography quickly blossomed into a dedicated service, built on the belief that every picture tells a unique story. We're not just photographers; we're memory-makers, visual historians, and artists committed to preserving your cherished experiences.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Over the years, we've had the honor of working with countless individuals, families, and businesses, turning their visions into stunning realities. Our journey has been defined by continuous learning, adapting to new technologies, and, most importantly, by the joy and satisfaction of our clients.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-6 mt-10">Our Philosophy</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At PhotoPro, our philosophy is simple: authentic moments make the best photographs. We strive to create a comfortable and engaging environment for every shoot, allowing your true personality and emotions to shine through. We combine technical expertise with an artistic eye, ensuring that each image is not just a photograph, but a piece of art that evokes feeling and tells a compelling narrative. We believe in quality over quantity, personalized service, and building lasting relationships with our clients.
        </p>

        <h3 className="text-3xl font-bold text-gray-800 mb-6 mt-10">Meet the Team (Optional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/200x200/6C2CEB/FFFFFF?text=Photographer+1"
              alt="Team Member 1"
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4 shadow-lg"
            />
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Rahul Singh</h4>
            <p className="text-primary-purple font-medium">Lead Photographer & Founder</p>
            <p className="text-gray-600 text-sm mt-2">Specializing in wedding and candid photography. Passionate about capturing genuine emotions.</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/200x200/4C51BF/FFFFFF?text=Photographer+2"
              alt="Team Member 2"
              className="rounded-full w-48 h-48 object-cover mx-auto mb-4 shadow-lg"
            />
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Priya Mehta</h4>
            <p className="text-secondary-indigo font-medium">Portrait & Event Specialist</p>
            <p className="text-gray-600 text-sm mt-2">Known for her vibrant portraits and dynamic event coverage. Loves working with natural light.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
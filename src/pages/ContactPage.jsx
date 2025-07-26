import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formMessage, setFormMessage] = useState({ type: '', text: '' }); // success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real application, you'd send formData to your backend here
      console.log('Contact Form Submitted:', formData);
      setFormMessage({ type: 'success', text: 'Thank you for your message! We will get back to you soon.' });
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
    } else {
      setFormMessage({ type: 'error', text: 'Please correct the errors in the form.' });
    }
  };

  return (
    <div className="bg-light-gray py-16">
      <SectionHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you! Reach out to us for inquiries, custom quotes, or just to say hello."
      />

      <div className="container mx-auto px-4 max-w-4xl bg-white rounded-xl shadow-2xl p-8 md:p-12 animate-fadeInUp">
        {formMessage.text && (
          <div className={`mb-6 p-4 rounded-lg text-center font-semibold ${
            formMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {formMessage.text}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your Name"
                />
                {formErrors.name && <p className="text-red-500 text-xs italic mt-1">{formErrors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="your@email.com"
                />
                {formErrors.email && <p className="text-red-500 text-xs italic mt-1">{formErrors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.subject ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Regarding a service or inquiry"
                />
                {formErrors.subject && <p className="text-red-500 text-xs italic mt-1">{formErrors.subject}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Your message here..."
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-xs italic mt-1">{formErrors.message}</p>}
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-primary-purple hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline text-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Contact Details</h3>
            <div className="space-y-6 text-gray-700 text-lg">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary-purple text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Address:</h4>
                  <p>OP-Amul Parlour, Krishna Photography</p>
                  <p>Kahanvadi, Gujarat, 388307</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone-alt text-primary-purple text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone:</h4>
                  <p>+91 95374 79575</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope text-primary-purple text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Email:</h4>
                  <p>krishnastudio@.gmailcom</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-clock text-primary-purple text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Business Hours:</h4>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Us on Map</h3>
              {/* Replace with an actual Google Maps embed */}
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
                [Google Maps Embed Placeholder]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
import React, { useState } from 'react';
import CalendarPicker from './CalendarPicker';
import SectionHeader from './SectionHeader'; // Reusable header component

const services = [
  { id: 'wedding', name: 'Wedding Photography', price: 50000, duration: '8 Hours' },
  { id: 'portrait', name: 'Portrait Session', price: 15000, duration: '2 Hours' },
  { id: 'event', name: 'Event Coverage', price: 30000, duration: '4 Hours' },
  { id: 'commercial', name: 'Commercial Shoot', price: 75000, duration: 'Full Day' },
];

const occasionTypes = ['Birthday', 'Anniversary', 'Engagement', 'Family Gathering', 'Corporate', 'Other'];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedService: '',
    selectedDate: null,
    selectedTime: '',
    occasion: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formMessage, setFormMessage] = useState({ type: '', text: '' }); // success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateSelect = (date) => {
    setFormData((prevData) => ({ ...prevData, selectedDate: date }));
    setFormErrors((prevErrors) => ({ ...prevErrors, selectedDate: '' })); // Clear error
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.selectedService) errors.selectedService = 'Please select a service';
    if (!formData.selectedDate) errors.selectedDate = 'Please select a date';
    if (!formData.selectedTime) errors.selectedTime = 'Please select a time slot';
    if (!formData.occasion) errors.occasion = 'Please select an occasion type';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real application, you'd send formData to your backend here
      console.log('Form Submitted Successfully:', formData);
      setFormMessage({ type: 'success', text: 'Booking request sent! We will contact you soon.' });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        selectedService: '',
        selectedDate: null,
        selectedTime: '',
        occasion: '',
        notes: '',
      });
      setFormErrors({});
    } else {
      setFormMessage({ type: 'error', text: 'Please correct the errors in the form.' });
    }
  };

  // Generate sample time slots (e.g., every hour from 9 AM to 5 PM)
  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i <= 17; i++) {
      slots.push(`${i < 10 ? '0' : ''}${i}:00 AM`);
      // You can add half-hour slots:
      // slots.push(`${i < 10 ? '0' : ''}${i}:30 AM`);
    }
    return slots;
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Book Your Photography Session"
        subtitle="Let's capture your moments beautifully. Fill out the form below to request a booking."
      />

      {formMessage.text && (
        <div className={`mb-6 p-4 rounded-lg text-center font-semibold ${
          formMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {formMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your Full Name"
            />
            {formErrors.name && <p className="text-red-500 text-xs italic mt-1">{formErrors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="you@example.com"
            />
            {formErrors.email && <p className="text-red-500 text-xs italic mt-1">{formErrors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="+91 12345 67890"
            />
            {formErrors.phone && <p className="text-red-500 text-xs italic mt-1">{formErrors.phone}</p>}
          </div>

          {/* Select Service */}
          <div>
            <label htmlFor="selectedService" className="block text-gray-700 text-sm font-bold mb-2">Choose Service</label>
            <select
              id="selectedService"
              name="selectedService"
              value={formData.selectedService}
              onChange={handleChange}
              className={`shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white ${formErrors.selectedService ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} (₹{service.price.toLocaleString()})
                </option>
              ))}
            </select>
            {formErrors.selectedService && <p className="text-red-500 text-xs italic mt-1">{formErrors.selectedService}</p>}
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Preferred Date & Time</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <CalendarPicker onDateSelect={handleDateSelect} />
              {formErrors.selectedDate && <p className="text-red-500 text-xs italic mt-1">{formErrors.selectedDate}</p>}
            </div>
            <div>
              <label htmlFor="selectedTime" className="block text-gray-700 text-sm font-bold mb-2">Select Time Slot</label>
              <select
                id="selectedTime"
                name="selectedTime"
                value={formData.selectedTime}
                onChange={handleChange}
                className={`shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white ${formErrors.selectedTime ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select a time</option>
                {generateTimeSlots().map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              {formErrors.selectedTime && <p className="text-red-500 text-xs italic mt-1">{formErrors.selectedTime}</p>}
            </div>
          </div>
        </div>

        {/* Occasion Type */}
        <div className="mb-6">
          <label htmlFor="occasion" className="block text-gray-700 text-sm font-bold mb-2">Type of Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            className={`shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white ${formErrors.occasion ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select occasion</option>
            {occasionTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {formErrors.occasion && <p className="text-red-500 text-xs italic mt-1">{formErrors.occasion}</p>}
        </div>

        {/* Notes/Special Requests */}
        <div className="mb-6">
          <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">Additional Notes / Special Requests</label>
          <textarea
            id="notes"
            name="notes"
            rows="4"
            value={formData.notes}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300"
            placeholder="Any specific poses, themes, or details you'd like us to know?"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-primary-purple hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Request Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
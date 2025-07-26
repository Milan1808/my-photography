import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Styles for the date picker

// You would ideally fetch unavailable dates from your backend
const unavailableDates = [
  new Date(2025, 6, 20), // July 20, 2025
  new Date(2025, 6, 25), // July 25, 2025
  new Date(2025, 7, 1),  // August 1, 2025
];

const CalendarPicker = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateSelect(date); // Pass the selected date up to the parent component
  };

  const isUnavailable = (date) => {
    // Check if the date is in the unavailableDates array
    return unavailableDates.some(
      (unavailableDate) =>
        unavailableDate.getFullYear() === date.getFullYear() &&
        unavailableDate.getMonth() === date.getMonth() &&
        unavailableDate.getDate() === date.getDate()
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Select an Available Date</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()} // Cannot select past dates
        inline // Display calendar directly in the component
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple"
        // Highlight unavailable dates
        dayClassName={(date) => (isUnavailable(date) ? 'bg-red-100 text-red-500 line-through' : undefined)}
        // Disable unavailable dates
        filterDate={(date) => !isUnavailable(date)}
      />
      {selectedDate && (
        <p className="mt-4 text-lg text-gray-700 text-center">
          You selected: <span className="font-semibold text-primary-purple">
            {selectedDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </p>
      )}
    </div>
  );
};

export default CalendarPicker;
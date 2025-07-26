import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner'; // Adjust path if needed

const DataFetcherComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate an API call
        const response = await new Promise(resolve => setTimeout(() => {
          // Simulate success or failure
          if (Math.random() > 0.2) { // 80% chance of success
            resolve(['Item 1', 'Item 2', 'Item 3']);
          } else {
            reject(new Error('Failed to fetch data.'));
          }
        }, 2000));
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="h-20 w-20" color="border-secondary-indigo" thickness="border-8" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 text-xl mt-8">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Loaded Data</h2>
      <ul className="list-disc list-inside text-lg text-gray-700">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcherComponent;
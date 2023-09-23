import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'; // Import the format function from date-fns
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [locations, setLocations] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch location data for Himachal Pradesh and Uttarakhand
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://prototype-test-indra-backend.onrender.com/api/locations'); // Replace with location API endpoint
        const data = await response.json();

        setLocations(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching locations');
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  // Handle location selection change
  const handleLocationChange = async (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);

    try {
      setLoading(true);
      const response = await fetch(`https://prototype-test-indra-backend.onrender.com/api/predictions?location=${selectedLocation}`); // Replace with prediction API endpoint
      const data = await response.json();

      setPredictions(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching predictions');
      setLoading(false);
    }
  };

  // Format timestamp function
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return format(date, 'dd MMM yyyy HH:mm:ss');
  };

  return (
    <div className="dashboard-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <select value={selectedLocation} onChange={handleLocationChange}>
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location.name} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>

          <div className="prediction-table">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Probability</th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((prediction, index) => (
                  <tr key={index}>
                    <td>{formatTimestamp(prediction.timestamp)}</td>
                    <td>{(prediction.probability * 100).toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Additional dashboard components */}
    </div>
  );
};

export default Dashboard;

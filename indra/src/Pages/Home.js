import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Home.css'; 

const Home = () => {
  const textItems = [
    'Welcome to INDRA - Cloudburst Prediction. Explore real-time cloudburst probabilities and stay informed about weather events.',
    'Our advanced model uses satellite data to provide accurate predictions for Himachal Pradesh and Uttarakhand.',
    'With INDRA, you can make informed decisions to ensure safety and preparedness in the face of extreme weather conditions.',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Define goToNext as a useCallback to prevent the warning
  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % textItems.length);
  }, [textItems.length]);

  useEffect(() => {
    // Automatically advance the carousel every 5 seconds
    const interval = setInterval(goToNext, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [goToNext]); // Add goToNext to the dependency array

  return (
    <div className="carousel-container" style={{
      background: 'rgba(240, 248, 255, 0.5)',
      borderRadius: '26px',
      maxWidth: 'fit-content',
      padding: '15px',
      marginTop: '15vh',
      marginLeft: '6vh'
    }}>
      <h2>
        CloudBurst Prediction Model Using Ensemble Models for best Accuracy!
      </h2>
      <div className="carousel-item">
        <p className="text">{textItems[activeIndex]}</p>
      </div>
    </div>
  );
};

export default Home;

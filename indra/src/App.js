import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'; 
import Navbar from './components/Navbar';

const App = () => {
  const backgroundStyle = {
    backgroundImage: 'url("/bgindra.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh', // Set the minimum height to cover the viewport
    display: 'flex',
    flexDirection: 'column', // You can adjust this as needed
    // Add other styles as needed
  };

  return (
    <div className="App" style={backgroundStyle}>
    <Navbar />
    <Dashboard />
    </div>

  );
}
export default App;
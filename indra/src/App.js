import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Predictions from './Pages/Predictions';
import Dashboard from './Pages/Dashboard';

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/bgindra.png)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div className="App" style={backgroundStyle}>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Outlet />}>
            <Route path="/Predictions" element={<Predictions />}>
              <Route path="/Dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

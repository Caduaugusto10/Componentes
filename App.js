import React, { useState } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './globals.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('profile')}>Profile</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
import React from 'react';
import Dashboard from './components/dashboard';
import Sidebar from './components/sidebars/sidebar';
import RightSidebar from './components/sidebars/rightsidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
      <RightSidebar />
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import './bootstrap.css';
import Balance from './components/Balance';
import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConverter';
import RecentActivities from './components/RecentActivities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <CurrencyConverter />
      <RecentActivities />
      <Footer />
    </div>
  );
}

export default App;

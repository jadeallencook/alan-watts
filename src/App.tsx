import React from 'react';
import './App.scss';
import 'animate.css';

import Header from './components/Header';
import Youtube from './components/Youtube';
import Licensing from './components/Licensing';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Youtube />
      <About />
      <Licensing />
      <Footer />
    </div>
  );
}

export default App;

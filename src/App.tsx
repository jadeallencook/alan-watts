import React from 'react';
import './App.scss';
import 'animate.css';

import Header from './components/Header';
import Youtube from './components/Youtube';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Youtube />
    </div>
  );
}

export default App;

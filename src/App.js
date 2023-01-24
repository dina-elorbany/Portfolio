import React from 'react';

import {
  About,
  Certificates,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from './container';
import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Certificates />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;

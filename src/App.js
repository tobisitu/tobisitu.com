import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/home.js';
import AboutPreview from './components/about-preview.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer';
import ScrollToTop from './components/scrolltotop';



function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Welcome/>
      <AboutPreview/>
      <Footer/>
    </div>
  );
}

export default App;

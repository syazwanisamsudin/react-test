import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutMe } from './intro/AboutMe';
import Navbar from './header/header';
import './App.css';
import { Profile } from './intro/profile';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Timeline from './journey/timeline';
import Footer from './footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="project">
        <ImageSlider slides={SliderData} />
      </div>
      <div id="journey">
        <Timeline />
      </div>
      <Footer />
    </div>
  );
}

export default App;

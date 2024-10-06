import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import './Categories.css';
import Footer from '../../Component/Footer/Footer';
import image from '../../Component/Assets/hero-0.jpeg';

function Categories() {
  return (
    <>
    <Navbar/>
    <section className="Categories-section">
      <div className="Categories">
        <h1>Categories page</h1>
        <img src={image} alt="image"/>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Categories;
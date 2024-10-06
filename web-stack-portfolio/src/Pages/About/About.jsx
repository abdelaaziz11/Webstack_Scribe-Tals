import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import './About.css';
import Footer from '../../Component/Footer/Footer';
import image from '../../Component/Assets/image-2.jpeg';

function About() {
  return (
    <>
    <Navbar/>
    <section className="about-section">
      <div className="about">

        <h1>About Us</h1><img src={image} alt="image"/>
        <span>Let's to know more about us</span>
        <p>Scribe Tales is a web application created to give people a platform where they can share their personal stories and experiences with their community and friends. The app allows users to craft narratives, document life events, and express themselves through writing. These stories can be shared publicly with the broader community or privately with close friends, fostering connections and conversations. Scribe Tales is designed to build a sense of belonging and provide an outlet for personal expression through storytelling.</p>
        
      </div>
    </section>
    <Footer />
    </>
  );
}

export default About;
import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import './StoryPage.css';
import image from '../../Component/Assets/hero.jpeg';
import Footer from '../../Component/Footer/Footer';

function StoryPage() {
  return (
    <>
    <Navbar/>
    <section className="story-section">
        <div className="story">
            <div className="story-">
                <h1>Tell us about your Story</h1>
                <div className="story-form">
                    <textarea name="story" id="message" cols="80" rows="25" placeholder="Write your story here"></textarea>
                    <button className="send-btn" type="submit">Send</button>
                </div>
            </div>
            <div className="image">
                <img src={image} alt="image"/>
            </div>
        </div>
    </section>
    <Footer />
    </>
  );
}

export default StoryPage;
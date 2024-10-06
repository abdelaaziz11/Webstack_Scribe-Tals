import React from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import hero01 from '../Assets/hero-01.jpeg';
import img1 from '../Assets/image-1.jpeg';
import img2 from '../Assets/image-2.jpeg';
import img3 from '../Assets/image-3.jpeg';
import img4 from '../Assets/image-4.jpeg';
import img5 from '../Assets/image-5.jpeg';
import img6 from '../Assets/image-6.jpeg';
import img7 from '../Assets/image-7.jpeg';
import img8 from '../Assets/image-8.jpeg';
import img9 from '../Assets/image-9.jpeg';
import img10 from '../Assets/image-10.jpeg';
import img11 from '../Assets/image-11.png';
import img12 from '../Assets/image-12.png';

const Main = () => {
    return (
        <>
        <haeder>
             <section className="hero">
                <div className="intro">
                    <h1>Welcome</h1>
                    <h3>To Scribe Tales</h3>
                    <p>Scribe Tales is a vibrant online community where storytellers of all backgrounds 
                        come together to share their tales, connect with fellow writers,
                         and Inspire readers around the world. Our platform offers o welcoming
                         space for creativity, encouraging both seasoned authors and budding 
                         writers to craft and share their unique narratives.</p>
                    <span><button><Link to="/story"><FontAwesomeIcon icon={faFile} className='bx bx-file'/> Share your story</Link></button></span>
                </div>
                <div className="image-hero">
                    <img src={hero01} alt="hero"/>
                </div>
            </section>
        </haeder>
        <main className="main" id="main">
            <section className="main-section">
                <div className="images-user">
                    <div className="images-ai">
                        <div className="images">
                            <img src={img1} alt="image"/>
                            <img src={img2} alt="image"/>
                            <img src={img3} alt="image"/>
                            <img src={img4} alt="image"/>
                            <img src={img5} alt="image"/>
                            <img src={img6} alt="image"/>
                            <img src={img7} alt="image"/>
                            <img src={img8} alt="image"/>
                            <img src={img9} alt="image"/>
                            <img src={img10} alt="image"/>
                            <img src={img11} alt="image"/>
                            <img src={img12} alt="image"/>
                        </div>
                    </div>
                    <div className="user">
                        <div className="icon-user">
                            <FontAwesomeIcon icon={faUser} className='bx bx-user-circle'/>
                            
                        </div>
                        <div className="user-paragraph">
                            <p>Scribe Tales is a vibrant online community where storytellers of all backgrounds 
                            come together to share their tales, connect with fellow writers,
                             and Inspire readers around the world</p>
                             <p>Scribe Tales is a vibrant online community where storytellers of all backgrounds 
                                come together to share their tales</p>
                        </div>
                        <div className="btn">
                            <button className="btn-explore explore-tale">Explore Tale</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
};

export default Main;
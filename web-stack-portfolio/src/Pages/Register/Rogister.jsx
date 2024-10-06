import React from 'react';
import './Register.css';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import { Link } from 'react-router-dom';

function Register() {
    
    return (
        <>
        <Navbar/>
            <div className="regester-page">
                <form  className="register-form">
                    <h3>Register</h3>
                    <label htmlFor="firstName">First Name:*</label>
                    <input type="text" />
                    <label htmlFor="lastName">Last Name:*</label>
                    <input type="text" />
                    <label htmlFor="email">Email:*</label>
                    <input type="email" />
                    <label htmlFor="password">Password:*</label>
                    <input type="password"/>
                    <label htmlFor="password">Repeat Password:*</label>
                    <input type="password"/>
                    <button className="button-login" type="submit">Register</button>
                    
                    <p className="login-link">If you have an account! <Link to="/login">Login Here.</Link></p>
                </form>
            </div>
        <Footer/>
        </>
    );
}

export default Register;
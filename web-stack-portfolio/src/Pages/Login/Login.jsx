import React from 'react';
import './Login.css';
import Navbar from '../../Component/Navbar/Navbar';
import { Link } from 'react-router-dom';

function Login() {
    
    return (
        <>
        <Navbar/>
        <div className="login-page">
            <div className="form-page">
                <form  className="form" id="form">
                    <h3>Login</h3>
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password"/>
                    <button className="button-login" type="submit">Login</button>
                    <div className="hr-div">
                      <hr></hr>  
                    </div>
                    
                    <button className="btn-login-email">Continue with Google</button>
                    <p className="register-link">If you Do not have an account! <Link to="/register">Create It Here.</Link></p>
                </form>
            </div>
        </div>
        </>
    );
}

export default Login;
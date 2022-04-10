import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmaliBlur = (e) =>{
        console.log(e.target.email.value)
    }

    return (
        <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onClick={handleEmaliBlur} type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input type="confirm-password" name="confirm-password" id="" required />
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
        Already have an account ? 
        <Link className="form-link" to="/login"> Login</Link>
        </p>
      </div>
    </div>
    );
};

export default Signup;
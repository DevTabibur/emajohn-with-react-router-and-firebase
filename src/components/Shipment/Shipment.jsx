import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../Firebase/Firebase.init.js'

const Shipment = () => {

    const [user] = useAuthState(app)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = (e) =>{
        setName(e.target.value);
    }

    const handleAddressBlur = (e) =>{
        setAddress(e.target.value);
    }

    const handlePhoneBlur = (e) =>{
        setPhone(e.target.value);
    }

    const handleCreateUser = (e) =>{
        e.preventDefault();
        const shipment ={name, email, address, phone};
        console.log(shipment);
    }

    console.log(user)

    return (
        <div className="form-container">
      <div>
        <h2 className="form-title">Shipment Info</h2>
        <form onSubmit={handleCreateUser}>
        <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
            onClick={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
            value={user?.email}
            readOnly
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
            onClick={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Phone</label>
            <input
            onClick={handlePhoneBlur}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <input className="form-submit" type="submit" value="Add Shipment" />
        </form>
        <p>
        </p>
      </div>
    </div>
    );
};

export default Shipment;
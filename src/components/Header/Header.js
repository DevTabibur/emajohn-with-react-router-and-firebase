import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
import app from '../Firebase/Firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.init';

const Header = () => {
    const [user] = useAuthState(app);
    const handleSignOut = () =>{
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">
                    {
                        user ? <button onClick={handleSignOut}>Log out</button> : <p>Log in</p>
                    }
                </Link>
            </div>
        </nav>
    );
};

export default Header;
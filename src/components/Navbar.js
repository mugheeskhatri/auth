import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png';
import { useHistory } from 'react-router';
import {getAuth , signOut} from 'firebase/auth'
import { useSelector } from 'react-redux';
function Navbar() {
    const auth = getAuth();
    var currentUser = auth.currentUser; 
    const [user , setUser] = useState(currentUser)
    console.log(user)
    let history = useHistory();
    let logOut =()=>{
        // signOut(auth).then(()=>{
        //     alert('Sign Out')
        //     setUser(false)
        // })
    }
    return (
        <div>
            <div className='navbar navbar-custom'>
            <div className='logo-section'>
                <img className='logo' src={logo} />
            </div>
            <div className='heading-section'>
                <h1 className='text-center'>UH FASHION</h1>
            </div>
            {!user ? <div className='auth-section'>
            <button onClick={()=> history.push('/login') } className='auth-btn'>Log In</button>
            <button onClick={()=> history.push('/signup') } className='auth-btn'>Sign Up</button>
            </div> : <div className='logo-section col-md-3 d-flex justify-content-center align-items-center'>
            <button onClick={logOut} className='auth-btn'>Log Out</button>
            </div>}
        </div>
        <div className='w-100 d-flex p-3 bg-light'>
        <div className='Search_bar d-flex'>
        <input type="text" className="form-control w-50 p-2"  placeholder="Enter email" />
        <button className='search-btn'>Search</button>
        </div>
        <div className='seller-btn d-flex justify-content-end'>
        <button onClick={()=> {
            !user ? history.push('/login') : history.push('/seller')         
            } } className='search-btn'>Become a Seller</button>
        </div>
        </div>
        </div>
    )
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Update the path accordingly

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className='nav' id='nav'>
      <Link to='/'>Home</Link>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </>
      )}
    </div>
  );
}

export default Navbar;

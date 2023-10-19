import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div>
        <h1>Here is the Login Page!</h1>
      </div>,
      <div>
        <Link to="/signup">Click Here to Sign Up!</Link>  {/* This is a link to the signup page */}
      </div>
    );
};


export default Login;
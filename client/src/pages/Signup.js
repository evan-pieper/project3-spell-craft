import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
      <div>
        <h1>Here is the Signup Page!</h1>
      </div>,
      <div>
        <Link to="/login">Already signed up? Click here to log in instead!</Link>  {/* This is a link to the login page */}
      </div>
    );
};


export default Signup;
import React from 'react';
import {Link} from 'react-router-dom';

const LoginButton = ({ onLogin }) => {
  return (
    <Link to = '/login'>
      <button className="login-button">
        Log in
      </button>
    </Link>
  );
};

export default LoginButton;
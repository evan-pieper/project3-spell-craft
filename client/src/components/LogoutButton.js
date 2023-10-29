import React from 'react';
import {Link} from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
  return (
    <Link to = '/'>
      <button className="logout-button" onClick={onLogout}>
        Log Out
      </button>
    </Link>
  );
};

export default LogoutButton;
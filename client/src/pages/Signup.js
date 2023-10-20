import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
//import { ADD_USER } from '../utils/mutations';

const Signup = () => {
    /*const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          console.log(data);
        } catch (e) {
          console.error(e);
        }
      };

    return (
    <div>
        <h1>Here is the Signup Page!</h1>
        <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your username"
              name="username"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
                onChange={handleChange}
            />
            <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
            />
            <button
                className="btn btn-block btn-primary"
                style={{ cursor: 'pointer' }}
                type="submit"
            >
                Submit
            </button>
        </form>
    </div>,
    <div>
        <Link to="/login">Already signed up? Click here to log in instead!</Link>  { This is a link to the login page}
    </div>
    ); */
    return (
      <div>
      </div>
    );
};

export default Signup;
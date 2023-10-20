import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  //const [addUser, { error, data }] = useMutation(ADD_USER);
  return(
    <div>
      <h1>Here is the Signup Page!</h1>
    </div>
  );
};

export default Signup;
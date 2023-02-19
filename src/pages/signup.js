import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { IS_LOGGED_IN, SIGNUP_USER } from '../resolvers/mutation';
import UserForm from '../components/UserForm';

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sign Up - Notedly';
  }, []);

  const client = useApolloClient();

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signUp);
      client.writeQuery({
        query: IS_LOGGED_IN,
        data: { isLoggedIn: true },
      });
      navigate('/');
    },
  });

  return (
    <>
      <UserForm action={signUp} formType="signup" />
      {loading && <p>Loading...</p>}
      {error && <p>Error creating an account!</p>}
    </>
  );
};

export default SignUp;

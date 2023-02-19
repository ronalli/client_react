import React from 'react';
import { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';

import UserForm from '../components/UserForm';
import { IS_LOGGED_IN, SIGNIN_USER } from '../resolvers/mutation';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  useEffect(() => {
    document.title = 'Sign In - Notedly';
  }, []);

  const navigate = useNavigate();

  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signIn);
      client.writeQuery({
        query: IS_LOGGED_IN,
        data: { isLoggedIn: true },
      });
      navigate('/');
    },
  });

  return (
    <>
      <UserForm action={signIn} typeForm="signin">
        {loading && <p>Loading...</p>}
        {error && <p>Error signing in!</p>}
      </UserForm>
    </>
  );
};

export default SignIn;

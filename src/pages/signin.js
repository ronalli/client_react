import React from 'react';
import { useEffect } from 'react';

const SignIn = () => {
  useEffect(() => {
    document.title = 'Sign In - Notedly';
  }, []);

  return <div>SignIn</div>;
};

export default SignIn;

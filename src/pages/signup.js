import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gql, useMutation, useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

// import Button from '../components/Button';
import { IS_LOGGED_IN, SIGNUP_USER } from '../resolvers/mutation';
import UserForm from '../components/UserForm';

// const Wrapper = styled.div`
//   border: 2px solid #f5f4f0;
//   max-width: 500px;
//   padding: 1em;
//   margin: 0 auto;
// `;

// const Form = styled.form`
//   label,
//   input {
//     display: block;
//     line-height: 2em;
//   }

//   input {
//     width: 100%;
//     margin-bottom: 1em;
//   }
// `;

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sign Up - Notedly';
  }, []);

  // const [values, setValues] = useState();

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

  // const onChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <>
      <UserForm action={signUp} formType="signup" />
      {loading && <p>Loading...</p>}
      {error && <p>Error creating an account!</p>}
    </>

    // <Wrapper>
    //   <h2>Sign Up</h2>
    //   <Form
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       signUp({
    //         variables: {
    //           ...values,
    //         },
    //       });
    //     }}
    //   >
    //     <label htmlFor="username">Username: </label>
    //     <input
    //       required
    //       type="text"
    //       id="username"
    //       name="username"
    //       placeholder="username"
    //       onChange={onChange}
    //     />
    //     <label htmlFor="email">Email: </label>
    //     <input
    //       required
    //       type="text"
    //       id="email"
    //       name="email"
    //       placeholder="Email"
    //       onChange={onChange}
    //     />
    //     <label htmlFor="password">Password: </label>
    //     <input
    //       required
    //       type="password"
    //       id="password"
    //       name="password"
    //       placeholder="Password"
    //       onChange={onChange}
    //     />
    //     <Button type="submit">Submit</Button>
    //   </Form>
    // </Wrapper>
  );
};

export default SignUp;

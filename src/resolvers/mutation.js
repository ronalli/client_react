import { gql } from '@apollo/client';

export const IS_LOGGED_IN = gql`
  mutation LoggedIn {
    isLoggedIn
  }
`;

export const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;
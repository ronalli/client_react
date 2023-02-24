import { useMutation } from '@apollo/client';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DELETE_NOTE } from '../resolvers/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../resolvers/query';
import ButtonAsLink from './ButtonAsLink';

const DeleteNote = ({ noteId }) => {
  const navigate = useNavigate();
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: noteId,
    },
    refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
    onCompleted: (data) => {
      navigate('/mynotes');
    },
  });

  return <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>;
};

export default DeleteNote;

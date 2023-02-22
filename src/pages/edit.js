import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, gql, useMutation } from '@apollo/client';
import NoteForm from '../components/NoteForm';
import { GET_NOTE, GET_ME } from '../resolvers/query';
import { EDIT_NOTE } from '../resolvers/mutation';

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: userData } = useQuery(GET_ME);

  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  const [editNote] = useMutation(EDIT_NOTE, {
    variables: {
      id,
    },
    onCompleted: () => {
      navigate(`/note/${id}`);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! Note not found</p>;

  if (userData.me.id !== data.note.author.id) {
    return <p>You don't have access to edit this note</p>;
  }

  return <NoteForm content={data.note.content} action={editNote} />;
};

export default EditNote;

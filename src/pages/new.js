import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import NoteForm from '../components/NoteForm';
import { NEW_NOTE } from '../resolvers/mutation';

const NewNote = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = `New Note - Notedly`;
  }, []);

  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    onCompleted: (data) => {
      navigate(`/note/${data.newNote.id}`);
    },
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error saving the note</p>}
      <NoteForm action={data} />;
    </>
  );
};

export default NewNote;

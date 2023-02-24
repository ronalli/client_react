import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { GET_ME } from '../resolvers/query';
import DeleteNote from './DeleteNote';
import FavoriteNote from './FavoriteNote';

const NoteUser = ({ note }) => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <FavoriteNote
        me={data.me}
        noteId={note.id}
        favoriteCount={note.favoriteCount}
      />
      <br />
      {data.me.id === note.author.id && (
        <>
          <Link to={`/edit/${note.id}`}>Edit</Link>
          <br />
          <DeleteNote noteId={note.id} />
        </>
      )}
    </>
  );
};

export default NoteUser;

import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { TOGGLE_FAVORITE } from '../resolvers/mutation';
import { GET_MY_FAVORITES } from '../resolvers/query';
import ButtonAsLink from './ButtonAsLink';

const FavoriteNote = ({ me, noteId, favoriteCount }) => {
  const [count, setCount] = useState(favoriteCount);
  const [favorited, setFavorited] = useState(
    me.favorites.filter((note) => note.id === noteId).lenght > 0
  );

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: noteId,
    },
    refetchQueries: [{ query: GET_MY_FAVORITES }],
  });

  return (
    <>
      {favorited ? (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite();
            setFavorited(false);
            setCount((count) => count - 1);
          }}
        >
          Remove Favorite
        </ButtonAsLink>
      ) : (
        <ButtonAsLink
          onClick={() => {
            toggleFavorite();
            setFavorited(true);
            setCount((count) => count + 1);
          }}
        >
          Add to Favorite
        </ButtonAsLink>
      )}{' '}
      : {count}
    </>
  );
};

export default FavoriteNote;

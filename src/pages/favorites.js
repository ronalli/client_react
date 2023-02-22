import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import NoteFeed from '../components/NoteFeed';
import { GET_MY_FAVORITES } from '../resolvers/query';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorotes - Notedly';
  }, []);

  const { loading, error, data } = useQuery(GET_MY_FAVORITES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  if (data.me.favorites.length !== 0) {
    return <NoteFeed notes={data.me.favorites} />;
  } else {
    return <p>No favorites yet!</p>;
  }
};

export default Favorites;

import React, { useEffect } from 'react';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorotes - Notedly';
  }, []);
  return (
    <div>
      <p>There are my favorites</p>
    </div>
  );
};

export default Favorites;

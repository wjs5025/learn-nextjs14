import React from 'react';

function MovieDetail({ params }) {
  const { id } = params;
  return <h1>Movie {id}</h1>;
}

export default MovieDetail;

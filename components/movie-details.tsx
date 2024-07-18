import React from 'react';
import { URL } from '../app/(home)/page';

const getMovies = async id => {
  return await fetch(`${URL}/${id}`).then(res => res.json());
};

async function MovieDetails({ id }) {
  const movie = await getMovies(id);

  return <div>{JSON.stringify(movie)}</div>;
}

export default MovieDetails;

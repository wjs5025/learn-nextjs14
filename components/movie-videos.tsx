import React from 'react';
import { URL } from '../app/(home)/page';

const getVideos = async id => {
  return await fetch(`${URL}/${id}/videos`).then(res => res.json());
};

async function MovieVideos({ id }) {
  const movie = await getVideos(id);

  return <div>{JSON.stringify(movie)}</div>;
}

export default MovieVideos;

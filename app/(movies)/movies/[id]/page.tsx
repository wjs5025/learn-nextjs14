import React, { Suspense } from 'react';
import MovieDetails from '../../../../components/movie-details';
import MovieVideos from '../../../../components/movie-videos';

function MovieDetail({ params }) {
  const { id } = params;
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Details...</h1>}>
        <h1>Movie Details</h1>
        <MovieDetails id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Videos...</h1>}>
        <h1>Movie Videos</h1>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

export default MovieDetail;

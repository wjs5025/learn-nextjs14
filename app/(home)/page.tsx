import Link from 'next/link';

export const metadata = {
  title: 'Home',
};

export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const getMovies = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      {movies.map(movie => (
        <Link href={`/movies/${movie.id}`}>
          <h6>{movie.title}</h6>
        </Link>
      ))}
    </div>
  );
}

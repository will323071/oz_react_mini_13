import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import movieListData from './data/movieListData.json';

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const movies = movieListData.results;

export default function App() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <h2 className="text-2xl font-bold mt-6 mb-4 text-gray-800">이번 달 추천 영화</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link key={movie.id} to="/details">
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

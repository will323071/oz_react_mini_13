import { BASE_IMG_URL } from '@/App';

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={`${BASE_IMG_URL}${movie.poster_path}`}
        alt={movie.title}
        className="h-60 w-full object-cover"
      />
      <div className="p-3 flex flex-col gap-1">
        <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
        <span className="text-sm text-gray-500">⭐ {movie.vote_average}</span>
      </div>
    </div>
  );
}

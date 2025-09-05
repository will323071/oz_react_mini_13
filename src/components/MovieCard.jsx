import { BASE_IMG_URL } from '../App';

export default function MovieCard({ movie }) {
  return (
    <div className="rounded-lg overflow-hidden border shadow hover:scale-105 transition-transform">
      <img
        src={`${BASE_IMG_URL}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[240px] object-cover"
      />
      <div className="p-2">
        <h2 className="font-bold truncate">{movie.title}</h2>
        <p className="text-gray-600">⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
}

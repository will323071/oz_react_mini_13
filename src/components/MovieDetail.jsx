import { BASE_IMG_URL } from '@/App';

export default function MovieDetail({ detail }) {
  return (
    <div className="max-w-[1000px] mx-auto my-8 p-4 flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-lg">
      {/* 포스터 */}
      <img
        src={`${BASE_IMG_URL}${detail.poster_path}`}
        alt={detail.title}
        className="w-full md:w-1/3 rounded-lg"
      />

      {/* 상세 내용 */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800">{detail.title}</h1>
        <p className="text-gray-600">평점: {detail.vote_average}</p>
        <div className="flex flex-wrap gap-2">
          {detail.genres.map((genre) => (
            <span key={genre.id} className="px-3 py-1 bg-green-200 rounded-full text-sm text-gray-700">
              {genre.name}
            </span>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">{detail.overview}</p>
      </div>
    </div>
  );
}

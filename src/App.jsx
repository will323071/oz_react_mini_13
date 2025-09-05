import { Link, useSearchParams } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useFetch } from "./hooks/useFetch";

export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function App() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const API_URL = query
    ? `https://api.themoviedb.org/3/search/movie?query=${query}&language=ko`
    : `https://api.themoviedb.org/3/movie/popular?language=ko&page=1`;

  const movieData = useFetch(API_URL);
  console.log(movieData);

  return (
    <div className="max-w-[1080px] mx-auto p-4 pt-24">
      <h1 className="text-center text-3xl font-bold bg-amber-300 p-3 mb-4">
        {query ? `"${query}" 검색 결과` : "이번 달 영화"}
      </h1>

      {/* 메인 캐러셀 */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {movieData.results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 인기 영화 (검색 아닐 때만) */}
      {!query && (
        <>
          <h1 className="text-center text-3xl font-bold bg-red-300 p-3 my-4">
            이번 주 인기 영화
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movieData.results
              ?.filter((movie) => !movie.adult)
              .map((movie) => (
                <Link key={movie.id} to={`/details/${movie.id}`}>
                  <MovieCard movie={movie} />
                </Link>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

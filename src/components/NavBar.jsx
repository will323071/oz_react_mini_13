import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between py-4 px-5">
        {/* 로고 */}
        <Link to="/" className="text-3xl font-bold tracking-tight hover:text-yellow-400 transition">
          🎬 CineZone
        </Link>

        {/* 검색창 */}
        <input
          type="text"
          placeholder="영화를 검색해보세요..."
          className="px-3 py-1 w-1/3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* 버튼 그룹 */}
        <div className="flex gap-3">
          <button className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-lg transition">
            로그인
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-lg transition">
            회원가입
          </button>
        </div>
      </div>
    </nav>
  );
}

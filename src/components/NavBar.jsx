import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 600); // 0.6초 지연
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearch.trim()) {
      navigate(`/?query=${debouncedSearch}`);
    }
  }, [debouncedSearch, navigate]);

  return (
    <nav className="fixed top-0 w-full bg-black text-white shadow-md z-10">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold">
          <Link to="/">🎬 CineZone</Link>
        </h1>
        <input
          type="text"
          placeholder="영화 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 mx-4 border-b border-gray-300 bg-black text-white px-2"
        />
        <div className="flex gap-2">
          <button className="rounded-full bg-indigo-500 px-3 py-1">Login</button>
          <button className="rounded-full bg-indigo-500 px-3 py-1">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="pt-6 px-4">
        <Outlet />
      </main>
    </div>
  );
}
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="pt-1">
        <Outlet />
      </div>
    </div>
  );
}

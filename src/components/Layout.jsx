import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function Layout() {
  return (
    <div>
      <NavBar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

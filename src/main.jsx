import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import MovieDetail from './components/MovieDetail';
import movieDetailData from './data/movieDetailData.json';
import './index.css';

const detail = movieDetailData;

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<MovieDetail detail={detail} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

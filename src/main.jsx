import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';
import MovieDetail from './components/MovieDetail';
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

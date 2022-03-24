import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Error404 from './pages/Errors/404';

const Home = lazy(() => import('./pages/Home'));
const CharacterDetail = lazy(() => import('./pages/CharacterDetail'));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

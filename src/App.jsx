import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StoryDetail from './pages/Stories';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<StoryDetail />} />
    </Routes>
  );
};

export default App;

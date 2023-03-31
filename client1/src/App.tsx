import React from 'react';
import { Routes,Route,Navigate } from 'react-router';
import UserInterface from './pages/user';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<UserInterface/>}/>
    </Routes>
    </>
  );
}

export default App;

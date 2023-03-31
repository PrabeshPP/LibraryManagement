import React from 'react';
import { Routes,Route,Navigate } from 'react-router';
import UserInterface from './pages/user';
import Home from './components/Home/Home';
import BookDetail from './components/Book/Book-Detail';
import Books from './components/Book/Books';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<UserInterface/>}>
        <Route path='/' element={<Home/>}/>
        <Route path="/books/:id" element={<BookDetail/>}/>
        <Route path='/books' element={<Books/>}/>
      </Route>
      
    </Routes>
    </>
  );
}

export default App;

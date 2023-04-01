import React from 'react';
import { Routes,Route,Navigate } from 'react-router';
import UserInterface from './pages/user/user';
import Home from './components/Home/Home';
import BookDetail from './components/Book/Book-Detail';
import Books from './components/Book/Books';
import LoginPage from './pages/user/login';
import Cookies from 'js-cookie'
import Admin from './components/Admin/admin';
import { setAuthToken } from './utils/setHeaders';

function App() {
  const authToken=Cookies.get('_j1');
  setAuthToken(authToken)
  return (
    <>
    <Routes>
      <Route path="/" element={<UserInterface/>}>
        <Route path='/' element={<Home/>}/>
        <Route path="/books/:id" element={<BookDetail/>}/>
        <Route path='/books' element={<Books/>}/>
      </Route>
      <Route path='/signin' element={authToken?<Navigate to="/" replace/>:<LoginPage/>} />
      <Route path='/admin' element = {<Admin />} />
    </Routes>
    </>
  );
}

export default App;

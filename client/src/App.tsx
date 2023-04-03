import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import UserInterface from './pages/user/user';
import Home from './components/Home/Home';
import BookDetail from './components/Book/Book-Detail';
import Books from './components/Book/Books';
import LoginPage from './pages/user/login';
import Cookies from 'js-cookie'
import Admin from './components/Admin/admin';
import { setAuthToken } from './utils/setHeaders';
import CartPage from './pages/Cart/Cart';
import MainPage from './pages/Main/main';
import AdminBookUI from './components/Admin/admin-book';
import AdminUserUI from './components/Admin/admin-user';
import AdminPage from './pages/admin/admin-page';
import AdminDashBoard from './components/Admin/admin';
import AdminSignIn from './components/Admin/auth/signin';

function App() {
  const authToken = Cookies.get('_j1');
  const preferences = Cookies.get('preferences')

  setAuthToken(authToken)
  useEffect(() => {

  }, [authToken])
  return (
    <>
      <Routes>
        <Route path='/' element={!preferences ? <MainPage /> : preferences === 'admin' ? <Navigate to="/admin" replace /> : <Navigate to="/home" replace />} />
        <Route path="/home" element={<UserInterface />}>
          <Route path='/home' element={<Home />} />
          <Route path="/home/books/:id" element={<BookDetail />} />
          <Route path='/home/books' element={<Books />} />
          <Route path='/home/borrowed-books' element={<CartPage />} />
        </Route>
        <Route path='/signin' element={authToken ? <Navigate to="/home" replace /> : <LoginPage />} />
        <Route path='/admin' element={<AdminPage/>}>
          <Route path='/admin' element={<AdminDashBoard/>} />
          <Route path='/admin/books' element={<AdminBookUI/>}/>
          <Route path='/admin/users' element={<AdminUserUI/>}/>
        </Route>
        <Route path='/admin/signin' element={authToken?<Navigate to="/admin" replace/>:<AdminSignIn/>}/>
        <Route path='/admin/signup' element={authToken?<Navigate to="/admin" replace/>:<AdminSignIn/>}/>
      </Routes>
    </>
  );
}

export default App;

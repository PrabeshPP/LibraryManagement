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
import AdminSignUp from './components/Admin/auth/signup';
import CreateBook from './components/Admin/Book/Create-Book';


function App() {
  const authToken = Cookies.get('_uj1');
  const adminAuthToken=Cookies.get('_aj1');
  const preferences = Cookies.get('preferences')



  setAuthToken(authToken)
  return (
    <>
      <Routes>
        <Route path='*' element={!preferences ? <MainPage /> : preferences === 'admin' ? <Navigate to="/admin" replace /> : <Navigate to="/home" replace />} />
        <Route path="/home" element={<UserInterface />}>
          <Route path='/home' element={<Home />} />
          <Route path="/home/books/:id" element={<BookDetail />} />
          <Route path='/home/books' element={<Books />} />
          <Route path='/home/borrowed-books' element={<CartPage />} />
        </Route>
        <Route path='/signin' element={adminAuthToken ? <Navigate to="/home" replace /> : <LoginPage />} />
        <Route path='/admin' element={<AdminPage/>}>
          <Route path='/admin' element={<AdminDashBoard/>} />
          <Route path='/admin/books' element={<AdminBookUI/>}/>
          <Route path = '/admin/books/create' element = {<CreateBook/>} />
          <Route path='/admin/users' element={<AdminUserUI/>}/>
        </Route>
        <Route path='/admin/signin' element={adminAuthToken?<Navigate to="/admin" replace/>:<AdminSignIn/>}/>
        <Route path='/admin/signup' element={adminAuthToken?<Navigate to="/admin" replace/>:<AdminSignUp/>}/>
      </Routes>
    </>
  );
}

export default App;

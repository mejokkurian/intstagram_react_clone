
import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Header, NotFound ,ImageUpload} from './components';
import { Homescreen, LoginPage, RegisterPage } from './Pages/index'



const App = () => {
  const Token = localStorage.getItem('Token')

  const Layout = ({ children }) => {
    return (
      <>
        <Header />
        {children}

      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Layout>
              <Homescreen />
            </Layout>
          } />
          <Route path="/register" element={Token ? <Navigate to="/" /> : <RegisterPage />} />
          <Route path="/login" element={Token ? <Navigate to="/" /> : <LoginPage />} />
          <Route path='/*' element={<NotFound />} />
          <Route path = '/modal' element = {<ImageUpload/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

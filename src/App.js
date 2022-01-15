
import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Homescreen, LoginPage, RegisterPage } from './Pages/index'

const App = () => {

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/' element={
            <Layout>
              <Homescreen />
            </Layout>
          } />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

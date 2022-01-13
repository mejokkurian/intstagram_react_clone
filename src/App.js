
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {LoginPage,RegisterPage} from './Pages/index'

function App() {

// const layout=({children})=>{
// <Header>
//   {children}
// </Header>
// }

  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route  path="/login" element={<LoginPage/>}/>
   <Route  path="/register" element={<RegisterPage/>}/>
   <Route  path="*" element={<LoginPage/>}/>

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

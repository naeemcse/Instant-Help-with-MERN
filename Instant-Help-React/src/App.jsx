
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Home from './assets/pages/Home/Home'
import Footer from './assets/components/footer/footer'

import NotFound from "./assets/components/NotFound";
import Form from "./assets/pages/form/Form";
import Login from "./assets/pages/login/Login";
import Demo from "./assets/pages/Demo/Demo";
//import TestSearch from "./assets/pages/TestSearch/testSearch";

import Profile from "./assets/pages/userProfile/Profile";



function App() {


  return (
    <>
   <BrowserRouter>
   
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="*" element={<NotFound/>}/>
        <Route path="/post" element={<Form/>}/>
      <Route path="/demo" element={<Demo/>} />
      <Route path="/user" element={<Profile/>} />
         
          
   </Routes>
   </BrowserRouter>
    {/* <Home/>
    
 

    <Footer/> */}
    
   
  
    </>
  )
}

export default App

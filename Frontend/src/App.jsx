import React from 'react';
import Home from './home/Home';
import Courses from "./courses/Courses";
import {Navigate, Route,Routes} from "react-router-dom";
import Login from './login/Login';
import Signup from './Signup/Signup';
import Contactfo from './contact/Contactfo';
import Abou from './about/About';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  

  return (
    <div className='dark:bg-slate-900  dark:text-white'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={authUser?<Courses/>:<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>    
          <Route path="/contactform" element={<Contactfo/>}/> 
          <Route path="/about" element={<Abou/>}/>   
        </Routes>
        <Toaster/>
    </div>
  )
}

export default App

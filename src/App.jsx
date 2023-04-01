import React from 'react'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './components/Error/Error404'
import About from './Pages/About'
import Register from './Pages/Register'
import Admin from './components/forms/Admin'
import Student from './components/forms/Student'
import Teacher from './components/forms/Teacher'
import Timetable from './Pages/TimeTable'
import Index from './components/home/Home'
import Login from './Pages/Login'
import New from './Pages/New'
import Protected from './components/Protect/Protected'
import GoToTop from './utlis/GoTo';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route index element={<Index />} />
              <Route path='Register' element={<Register />} />
              <Route path='login' element={<Login />}>
                <Route path="admin" element={<Admin />} />
                <Route path="student" element={<Student />} />
                <Route path="teacher" element={<Teacher />} />
              </Route>
              <Route path='view/:name' element={< Protected Component={Timetable} />} />
              <Route path='About' element={<About />} />
              <Route path='contact' element={<New />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
              <GoToTop />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

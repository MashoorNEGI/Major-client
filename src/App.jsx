import React, { lazy, Suspense } from 'react'
import './App.css'
// import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './components/Error/Error404'
import About from './Pages/About'
import Register from './Pages/Register'
import Loader from './components/shared/Loader'
import GoToTop from './utlis/GoTo';
import { Admin, Student, Teacher } from './components/forms/Wrap'
import Schedule from './Pages/Schedule'
const Protected = lazy(() => import('./components/Protect/Protected'));
const Home = lazy(() => import('./Pages/Home'));
const Timetable = lazy(() => import('./Pages/TimeTable'));
const Index = lazy(() => import('./components/home/Home'));
const Login = lazy(() => import('./Pages/Login'));
const New = lazy(() => import('./Pages/New'));
const App = () => {
  const [ navVisible, showNavbar ] = React.useState(false);
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<Home />}>
                <Route index element={<Index />} />
                <Route path='Register' element={<Register />} />
                <Route path='login' element={<Login />}>
                  <Route path="admin" element={<Admin />} />
                  <Route path="student" element={<Student />} />
                  <Route path="teacher" element={<Teacher />} />
                </Route>
                <Route path='view' element={<Schedule visible={navVisible} show={showNavbar} />} >
                  <Route path=':name' element={< Protected Component={Timetable} />} />
                  <Route path='search' element={< Protected Component={Admin} />} />
                </Route>
                <Route path='About' element={<About />} />
                <Route path='contact' element={<New />} />
              </Route>
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
          <GoToTop />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

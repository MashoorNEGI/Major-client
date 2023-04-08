import React, { lazy, Suspense } from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import Error404 from 'src/components/Error/Error404'
import About from 'src/Pages/About'
import Register from 'src/Pages/Register'
import { Loader } from 'src/components/shared/Loader'
import GoToTop from 'src/utils/GoTo';
import { Admin, Student, Teacher } from 'src/components/Forms'
import { Search } from 'src/components/shared/Wrap'
import Schedule from 'src/Pages/Schedule'
const Protected = lazy(() => import('src/components/Protected'));
const Home = lazy(() => import('src/Pages/Home'));
const Timetable = lazy(() => import('src/Pages/TimeTable'));
const Index = lazy(() => import('src/components/home/Home'));
const Login = lazy(() => import('src/Pages/Login'));
const Contact = lazy(() => import('src/Pages/Contact'))
// const New = lazy(() => import('src/Pages/New'));
const Routes = () => {
    return (
        <>
            <GoToTop />
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path='/' element={<Home />}>
                        <Route index element={<Index />} />
                        <Route path='Register' element={<Register />} />
                        <Route path='login' element={<Login />}>
                            <Route path="admin" element={<Admin />} />
                            <Route path="student" element={<Student />} />
                            <Route path="teacher" element={<Teacher />} />
                        </Route>
                        <Route path='view' element={<Protected Component={Schedule} />} >
                            <Route path=':name' element={<Timetable/>} />
                            <Route path='search' element={<Search/>} />
                        </Route>
                        <Route path='About' element={<About />} />
                        <Route path='contact' element={<Contact />} />
                    </Route>
                    <Route path="*" element={<Error404 />} />
                </Switch>
            </Suspense>
        </>
    )
}

export default Routes

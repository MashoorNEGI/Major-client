import React, { lazy, Suspense } from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import Error404 from 'src/components/Error/Error404'
import { Loader } from 'src/components/shared/Loader'
import GoToTop from 'src/utils/GoTo';
import { Search } from 'src/components/Search'
import Schedule from 'src/Pages/Schedule'
import Setting from 'src/components/Setting';
const Register = lazy(() => import('src/Pages/Register'))
const Protected = lazy(() => import('src/components/Protected'));
const Home = lazy(() => import('src/Pages/Home'));
const About = lazy(() => import('src/Pages/About'));
const Timetable = lazy(() => import('src/Pages/TimeTable'));
const Index = lazy(() => import('src/components/home/Home'));
const Login = lazy(() => import('src/Pages/Login'));
const Contact = lazy(() => import('src/Pages/Contact'))
const Control = lazy(() => import('src/Pages/Controls'));
const Routes = () => {
    return (
        <>
            <GoToTop />
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path='/' element={<Home />}>
                        <Route index element={<Index />} />
                        <Route path='register' element={<Register />} />
                        <Route path="login" element={<Login />} />
                        <Route path='view' element={<Protected Component={Schedule} />} >
                            <Route path=':name' element={<Timetable />} />
                            <Route path='search' element={<Search />} />
                            <Route path='Setting' element={<Setting/>} />
                        </Route>
                        <Route path='controls' element={<Control />} />
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

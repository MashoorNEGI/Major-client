import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import Theme from '../utlis/Theme'
const Header = ({ data }) => {
    const name = data && (data.class ? data.class : data.auth.slice(20, 30))
    return (
        <nav>
            <input type="checkbox" id="toggler" />
            <label htmlFor="toggler" className="hamburger"><i className="ri-menu-line"></i></label>
            <div className="menu">
                <ul className="list">
                    <li className="navlinks"><NavLink to="/"> Home</NavLink></li>
                    <li className="navlinks"><NavLink to={`/view/${name}`}> Schedule</NavLink></li>
                    <li className="navlinks"><NavLink to="/contact"> Contact</NavLink></li>
                    <li className="navlinks"><NavLink to="/About"> About</NavLink></li>
                </ul>
            </div>
            {
                data ?
                    <>
                        <a href='/' onClick={() => { localStorage.removeItem('Data') }} className='acc-btn'>Logout</a>
                        <Theme />
                    </>
                    :
                    <>
                        <NavLink to='/login' className='acc-btn' style={{ left: '20px' }}>Login</NavLink>
                        <Theme />
                    </>
            }
        </nav>
    )
}

export default Header

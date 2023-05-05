import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import "./css/header.css";
import { MdOutlineLogout } from 'react-icons/md';

const Header = ({ data }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const Navigate = useNavigate();
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [ ref ]);

    const handleMenuClick = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        toast.success('You are logged out', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            onClose: () => {
                Navigate('/')
                localStorage.clear();
            },
            draggable: true,
            progress: undefined,
            theme: Cookies.get('theme') || "light",
        });
    };

    return (
        <nav ref={ref}>
            <input type="checkbox" id="toggler" checked={isOpen} onChange={handleMenuClick} />
            <label htmlFor="toggler" className="hamburger"><i className="ri-menu-line"></i></label>
            <div className={`menu ${isOpen ? "active" : ""}`}>
                <ul className="list">
                    <li className="navlinks"><NavLink to="/" onClick={handleMenuClick}>Home</NavLink></li>
                    <li className="navlinks"><NavLink to='/view' onClick={handleMenuClick}>Schedule</NavLink></li>
                    <li className="navlinks"><NavLink to="/contact" onClick={handleMenuClick}>Contact</NavLink></li>
                    <li className="navlinks"><NavLink to="/About" onClick={handleMenuClick}>About</NavLink></li>
                </ul>
            </div>
            {data ? (
                <MdOutlineLogout className="acc-btn" onClick={handleLogout} />
            ) : (
                <a href="/login" className="acc-btn" style={{ left: "20px" }}>Login</a>
            )}
        </nav>
    );
};

export default Header;

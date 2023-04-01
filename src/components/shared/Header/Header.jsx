import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import Theme from "../utlis/Theme";

const Header = ({ data }) => {
    const name = data && (data.class ? data.class : data.auth.slice(20, 30));
    const [ isOpen, setIsOpen ] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        // Detect clicks outside navbar
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ ref ]);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav ref={ref}>
            <input
                type="checkbox"
                id="toggler"
                checked={isOpen}
                onChange={handleMenuClick}
            />
            <label htmlFor="toggler" className="hamburger">
                <i className="ri-menu-line"></i>
            </label>
            <div className={`menu ${isOpen ? "active" : ""}`}>
                <ul className="list">
                    <li className="navlinks">
                        <NavLink to="/" onClick={handleMenuClick}>
                            Home
                        </NavLink>
                    </li>
                    <li className="navlinks">
                        <NavLink to={`/view/${name}`} onClick={handleMenuClick}>
                            Schedule
                        </NavLink>
                    </li>
                    <li className="navlinks">
                        <NavLink to="/contact" onClick={handleMenuClick}>
                            Contact
                        </NavLink>
                    </li>
                    <li className="navlinks">
                        <NavLink to="/About" onClick={handleMenuClick}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
            {data ? (
                <>
                    <a
                        href="/"
                        onClick={() => {
                            localStorage.removeItem("Data");
                        }}
                        className="acc-btn"
                    >
                        Logout
                    </a>
                    <Theme />
                </>
            ) : (
                <>
                    <a href="/login" className="acc-btn" style={{ left: "20px" }}>
                        Login
                    </a>
                    <Theme />
                </>
            )}
        </nav>
    );
};

export default Header;

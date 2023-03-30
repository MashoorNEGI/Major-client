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

    return (
        <nav ref={ref}>
            <input
                type="checkbox"
                id="toggler"
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
            />
            <label htmlFor="toggler" className="hamburger">
                <i className="ri-menu-line"></i>
            </label>
            <div className={`menu ${isOpen ? "active" : ""}`}>
                <ul className="list">
                    <li className="navlinks">
                        <NavLink to="/"> Home</NavLink>
                    </li>
                    <li className="navlinks">
                        <NavLink to={`/view/${name}`}> Schedule</NavLink>
                    </li>
                    <li className="navlinks">
                        <NavLink to="/contact"> Contact</NavLink>
                    </li>
                    <li className="navlinks">
                        <NavLink to="/About"> About</NavLink>
                    </li>
                </ul>
            </div>
            {data ? (
                <>
                    <NavLink
                        to="/"
                        onClick={() => {
                            localStorage.removeItem("Data");
                        }}
                        className="acc-btn"
                    >
                        Logout
                    </NavLink>
                    <Theme />
                </>
            ) : (
                <>
                    <NavLink
                        to="/login"
                        className="acc-btn"
                        style={{ left: "20px" }}
                    >
                        Login
                    </NavLink>
                    <Theme />
                </>
            )}
        </nav>
    );
};

export default Header
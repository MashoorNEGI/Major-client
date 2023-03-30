import React from 'react'
import { useLocation } from 'react-router-dom';
import Style from './Footer.module.css'
const Footer = () => {
    const location = useLocation();
    if (location.pathname === '*') {
        return null;
    }
    return (
        <>
            <footer>
                <div>
                    <div className={Style.content}>
                        <div className={Style.logo}>TimelyTable</div>
                        <div className={Style.socialicons}>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </footer>  
        </>
    )
}

export default Footer

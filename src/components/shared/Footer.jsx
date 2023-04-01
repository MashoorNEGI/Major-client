import React from 'react'
import Style from './css/Footer.module.css'
const Footer = () => {
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

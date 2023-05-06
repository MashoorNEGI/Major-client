import React from 'react'
import Style from './css/About.module.css'
const About = () => {
    return (
        <section className={Style.about}>
            <div className={Style.card}>
                <div className={Style.cardcontent}>
                    <h2>About Us</h2>
                    <p>Our website is created by Deepak Negi, a Web Developer with over 1 years of experience in web development. I have a Bachelor's degree in BCA from IITM. You can check my Profile below. </p>
                    <div className={Style.buttonborders}>
                        <button className={Style.primarybutton} onClick={() => { window.location = 'https://mashoornegi.github.io/Portfolio/' }}> PORTFOLIO
                        </button>
                    </div>
                    <p>Our website is built using the MERN stack, which includes MongoDB, Express.js, React, and Node.js.</p>
                </div>
            </div>
        </section>

    )
}

export default About

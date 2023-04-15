import React from "react";
export function Home() {
    return <>
        <div>
            <section className="hero" data-aos="fade-up">
                <div className="hero-content">
                    <div className="hero-image" data-aos="fade-up"
                        data-aos-delay="150">
                        <img src={'/eye.gif'} alt="Avatar" />
                    </div>
                    <div className="hero-text" data-aos="zoom-in"
                        data-aos-delay="500">
                        <h1>Make Timetables for Teachers with Ease</h1>
                        <p>Create and manage teacher timetables easily with our web app. Say goodbye to the hassle of manually scheduling classes and meetings.</p>
                        <a href="/" className="btn">Get Started</a>
                    </div>
                </div>
            </section>
            <div className="testimonials-section" data-aos="fade-up">
                <h2>What our users are saying</h2>
                <div className="testimonials-container">
                    <div className="testimonial-card" data-aos="fade-right">
                        <div className="testimonial-image">
                            <img src="https://via.placeholder.com/150x150.png" alt="User Image" />
                        </div>
                        <div className="testimonial-content">
                            <p className="testimonial-text">"I've been using this tool for a month and it has made my life so much easier! Creating a timetable used to take me hours, now it only takes minutes."</p>
                            <h3 className="testimonial-user">- John Doe, Math Teacher</h3>
                        </div>
                    </div>
                    <div className="testimonial-card" data-aos="fade-up">
                        <div className="testimonial-image">
                            <img src="https://via.placeholder.com/150x150.png" alt="User Image" />
                        </div>
                        <div className="testimonial-content">
                            <p className="testimonial-text">"As a new teacher, I was struggling with creating a timetable for my classes. This tool has been a lifesaver!"</p>
                            <h3 className="testimonial-user">- Jane Smith, English Teacher</h3>
                        </div>
                    </div>
                    <div className="testimonial-card" data-aos="fade-left">
                        <div className="testimonial-image">
                            <img src="https://via.placeholder.com/150x150.png" alt="User Image" />
                        </div>
                        <div className="testimonial-content">
                            <p className="testimonial-text">"The best timetable maker out there! It's so easy to use and saves me so much time."</p>
                            <h3 className="testimonial-user">- Tom Wilson, Science Teacher</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-section" data-aos="fade-up">
                <h2>What Our Teachers Say</h2>
                <div className="testimonials-container">
                    <div className="testimonial-card" data-aos="fade-right">
                        <div className="testimonial-image">
                            <img src="https://via.placeholder.com/150x150.png" alt="Testimonial 1" />
                        </div>
                        <div className="testimonial-content">
                            <p>"I've been using this website to create my timetables for the past year, and it has made my life so much easier. The interface is user-friendly and the features are just what I need."</p>
                            <h3>John Doe</h3>
                            <h4>Math Teacher</h4>
                        </div>
                    </div>
                    <div className="testimonial-card" data-aos="fade-up">
                        <div className="testimonial-image">
                            <img src="https://via.placeholder.com/150x150.png" alt="Testimonial 2" />
                        </div>
                        <div className="testimonial-content">
                            <p>"As a teacher with a busy schedule, I appreciate the simplicity and efficiency of this website. Creating and managing my timetables has never been easier."</p>
                            <h3>Jane Smith</h3>
                            <h4>English Teacher</h4>
                        </div>
                    </div>
                    <div className="testimonial-card" data-aos="fade-left">
                        <div className="testimonial-image">
                            <img src="https://via.placeholder.com/150x150.png" alt="Testimonial 3" />
                        </div>
                        <div className="testimonial-content">
                            <p>"I've tried many different timetable creation tools, but this one is by far the best. It's intuitive and customizable, and the customer support is top-notch."</p>
                            <h3>Bob Johnson</h3>
                            <h4>Science Teacher</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Home

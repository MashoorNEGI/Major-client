import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./css/Swapper.css";
import { EffectCoverflow, Pagination } from "swiper";
const Swapper = () => {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[ EffectCoverflow, Pagination ]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <p>website is designed to help users create and share timetables with others.User can request timetable for genrating for that particular class. Users can then share their timetables with others outside the site.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>One key feature of your website is the search function. Users can search for specific timetables by entering keywords or filters, such as course name or location. This makes it easier for users to find relevant timetables and coordinate with others.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Another important function is the ability to download or print timetables. This allows users to have a physical copy of their timetable, which they can refer to throughout the day. Users can also view all timetables available on the site, which could be useful for comparing schedules with others.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>To ensure user privacy and security, website allows users to log out directly from any page, without having to navigate to a separate page. This makes it more convenient for users to manage their accounts and log out when they're done using the site.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>website also includes a sidebar that contains various functions, including the ability to view personal timetables, and provide feedback or request updates to the timetable. This makes it easier for users to access all the functions they need in one place.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p>Overall, your timetable website provides a comprehensive solution for users to manage their schedules and coordinate with others. With its various functions and user-friendly design, your website could be a valuable tool for students, professionals, and anyone who needs help managing their time.</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Swapper
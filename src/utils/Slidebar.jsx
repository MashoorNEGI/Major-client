import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { FaAngleRight, FaAngleLeft, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Style from 'src/Pages/css/schedule.module.css';
import { BiSearchAlt } from 'react-icons/bi';
import { MdFavoriteBorder, MdOutlineSettings, MdMenu, MdOutlineLogout } from 'react-icons/md';

const Slidebar = ({ show, visible, ICON_SIZE, ID }) => {
  const handleLogout = () => {
    toast.success('You are logged out', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      onClose: () => {
        window.location.href = '/';
        localStorage.clear();
      },
      draggable: true,
      progress: undefined,
      theme: Cookies.get('theme') || "light",
    });
  };

  return (
    <>
      <div className={Style.mobilenav}>
        <button className={Style.mobilenavbtn} onClick={() => show(!visible)}>
          <FaBars size={24} />
        </button>
      </div>
      <nav className={!visible ? Style.navbar : Style.sidebar}>
        <button type="button" className={Style.navbtn} onClick={() => show(!visible)}>
          {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
        <div className={Style.navwidth} onClick={() => show(!visible)}>
          <div className={Style.navwidth}>
            <Link to={`/view/${ID}`} className={Style.navlink}>
              <MdFavoriteBorder size={ICON_SIZE} />
              <span>Favourite</span>
            </Link>
            <Link to="/view/search" className={Style.navlink}>
              <BiSearchAlt size={ICON_SIZE} />
              <span>Search</span>
            </Link>
            <Link to="/view/setting" className={Style.navlink}>
              <MdOutlineSettings size={ICON_SIZE} />
              <span>Settings</span>
            </Link>
          </div>
        </div>
        <div className={Style.navwidth} onClick={() => show(!visible)}>
          <Link to="/view" className={Style.navlink}>
            <MdMenu size={ICON_SIZE} />
            <span>Main Menu</span>
          </Link>
          <Link className={Style.navlink} onClick={handleLogout}>
            <MdOutlineLogout size={ICON_SIZE} />
            <span>Logout</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Slidebar;

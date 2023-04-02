import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import {
  FaAngleRight,
  FaAngleLeft,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
  FaBars
} from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'
import Style from './css/sidebar.module.css'
const ICON_SIZE = 20;

const Schedule = ({ visible, show }) => {
  return (
    <>
      <div className={Style.mobilenav}>
        <button
          className={Style.mobilenavbtn}
          onClick={() => show(!visible)}
        >
          <FaBars size={24} />
        </button>
      </div>
      <nav className={!visible ? Style.navbar : Style.sidebar}>
        <button
          type="button"
          className={Style.navbtn}
          onClick={() => show(!visible)}
        >
          {!visible
            ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button>
        <div className={Style.navwidth}>
          <div className={Style.navwidth}>
            <NavLink to="/view/fav" className={Style.navlink}>
              <MdFavoriteBorder size={ICON_SIZE} />
              <span>Favourite</span>
            </NavLink>
            <NavLink to="/view/search" className={Style.navlink}>
              <BiSearchAlt size={ICON_SIZE} />
              <span>Search</span>
            </NavLink>
            <NavLink to="/orders" className={Style.navlink}>
              <FaShoppingCart size={ICON_SIZE} />
              <span>Orders</span>
            </NavLink>
          </div>
        </div>

        <div className={Style.navwidth}>
          <NavLink to="/settings" className={Style.navlink}>
            <FaCog size={ICON_SIZE} />
            <span>Settings</span>
          </NavLink>
          <NavLink to="/Sign-out" className={Style.navlink}>
            <FaSignOutAlt size={ICON_SIZE} />
            <span>Logout</span>
          </NavLink>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Schedule

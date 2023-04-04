import React from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaShoppingCart,
  FaBars
} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import Style from 'src/Pages/css/schedule.module.css'
import {getLocalStorageItem} from './Localstorage'
import { BiSearchAlt } from 'react-icons/bi'
import { MdFavoriteBorder, MdMenu, MdOutlineLogout } from 'react-icons/md'
export function Slidebar({
  show,
  visible,
  ICON_SIZE
}) {
  return <>      <div className={Style.mobilenav}>
    <button className={Style.mobilenavbtn} onClick={() => show(!visible)}>
      <FaBars size={24} />
    </button>
  </div>
    <nav className={!visible ? Style.navbar : Style.sidebar}>
      <button type="button" className={Style.navbtn} onClick={() => show(!visible)}>
        {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
      </button>
      <div className={Style.navwidth}>
        <div className={Style.navwidth}>
          <Link to={`/view/${getLocalStorageItem('Data').class}`} className={Style.navlink}>
            <MdFavoriteBorder size={ICON_SIZE} />
            <span>Favourite</span>
          </Link>
          <Link to="/view/search" className={Style.navlink}>
            <BiSearchAlt size={ICON_SIZE} />
            <span>Search</span>
          </Link>
          <Link to="/orders" className={Style.navlink}>
            <FaShoppingCart size={ICON_SIZE} />
            <span>Orders</span>
          </Link>
        </div>
      </div>

      <div className={Style.navwidth}>
        <Link to="/view" className={Style.navlink}>
          <MdMenu size={ICON_SIZE} />
          <span>Main Menu</span>
        </Link>
        <Link to="/Sign-out" className={Style.navlink}>
          <MdOutlineLogout size={ICON_SIZE} />
          <span>Logout</span>
        </Link>
      </div>
    </nav></>;
}

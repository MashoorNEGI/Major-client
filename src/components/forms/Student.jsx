import React, { useState } from 'react'
import axios from 'axios';
import URL from '../../services/URL'
import Popup from "./css/Popup.module.css"
import { getLocalStorageItem, setLocalStorageItem } from '../../utlis/Localstorage';
const Admin = () => {
    const [ showPopup, setShowPopup ] = useState(false);
    const [ account, setAccount ] = useState({
        enroll_no: '',
        password: '',
    });
    const handleClose = () => {
        const data = getLocalStorageItem('Data');
        const myClass = data.class;
        window.location = `/view/${myClass}`
    };
    let username, values
    const handleit = (e) => {
        username = e.target.name
        values = e.target.value
        setAccount({ ...account, [ username ]: values })

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(`${URL}/student/signin`, account)
            if (res.data.auth) {
                setLocalStorageItem('Data', res.data, new Date().getTime() + 3600 * 1000);
            }
            setShowPopup(true);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form className="register-form" method='POST' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="enroll_no">Enroll No</label>
                    <input type="text" id="enroll_no" name="enroll_no" onChange={handleit} value={account.enroll_no} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleit} value={account.password} required />
                </div>
                <button type="submit" className='btn'>Login</button><br />
            </form>
            {showPopup && (
                <div className={Popup.popup}>
                    <div className='animate__animated animate__zoomIn animate__faster'>
                        <p>You are logged in</p>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Admin

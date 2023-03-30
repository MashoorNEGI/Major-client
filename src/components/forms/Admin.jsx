import React, { useState } from 'react'
import Popup from './Popup.module.css'
import { getLocalStorageItem, setLocalStorageItem } from '../shared/utlis/Localstorage';
const Admin = () => {
    const [ showPopup, setShowPopup ] = useState(false);
    const [ account, setAccount ] = useState({
        email: '',
        password: '',
    });
    let username, values
    const handleit = (e) => {
        username = e.target.name
        values = e.target.value
        setAccount({ ...account, [ username ]: values })

    }
    // Handler for when the close button is clicked
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (account.email === "ayushdeep@gmail.com" && account.password === "Ayushnegi") {
                setLocalStorageItem('Data', account.email, new Date().getTime() + 3600 * 1000);
                setShowPopup(true);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleClose = () => {
        setShowPopup(false);
        window.location = '/controls'
    };
    return (
        <>
            <form className="register-form" method='POST' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleit} value={account.email} required />
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

import React, { useState } from 'react'
import Popup from './css/Popup.module.css'
import axios from 'axios';
import { setLocalStorageItem, getLocalStorageItem } from '../../utlis/Localstorage';
import URL from '../../services/URL'
export const Admin = () => {
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

export const Teacher = () => {
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
    const handleClose = () => {
        setShowPopup(false);
        const { auth } = getLocalStorageItem('Data')
        const route = auth.slice(20, 30)
        window.location = `/view`
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(`${URL}/users/signin`, account
            )
            if (res.data.auth) {
                setLocalStorageItem('Data', res.data, new Date().getTime() + 3600 * 1000);
            }
            setShowPopup(true);
        } catch (error) {
            console.log(error)
            if (error.response.status === 400) {
                alert(error.response.data.error)
            }
        }
    }
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
                <p>Don't have account ?<a href="/register" className='signup'>Register</a></p>
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

export const Student = () => {
    const [ showPopup, setShowPopup ] = useState(false);
    const [ account, setAccount ] = useState({
        enroll_no: '',
        password: '',
    });
    const handleClose = () => {
        const data = getLocalStorageItem('Data');
        const myClass = data.class;
        window.location = `/view`
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
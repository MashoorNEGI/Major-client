import React, { useState } from 'react'
import { setLocalStorageItem } from 'src/utils/Localstorage';
import ApiRequest from 'src/API/apirequest';
import { Loggedin } from './Popup'
import  Style from './css/Forms.module.css'
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
        console.log(values)

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
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className={Style.formgroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleit} value={account.email} required />
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleit} value={account.password} required />
                </div>
                <button type="submit" className={Style.btn}>Login</button><br />
            </form>
            {showPopup && (
                <Loggedin close={handleClose} />
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
        window.location = `/view`
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await ApiRequest('users/signin', 'POST', account, { authorization: false })
            if (res.auth) {
                setLocalStorageItem('Data', res, new Date().getTime() + 3600 * 1000);
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
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className={Style.formgroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleit} value={account.email} required />
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleit} value={account.password} required />
                </div>
                <button type="submit" className={Style.btn}>Login</button><br />
                <p>Don't have account ?<a href="/register/teacher" className='signup'>Register</a></p>
            </form>
            {showPopup && (
                <Loggedin close={handleClose} />
            )}

        </>
    )
}

export const Student = () => {
    const [ visible, setVisible ] = useState(false);

    const [ account, setAccount ] = useState({
        enroll_no: '',
        password: '',
    });
    let username, values
    const handleit = (e) => {
        username = e.target.name
        values = e.target.value
        setAccount({ ...account, [ username ]: values })

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await ApiRequest('student/signin', 'POST', account, { authorization: false })
            if (res.auth) {
                setLocalStorageItem('Data', res, new Date().getTime() + 3600 * 1000);
                setVisible(true)
                setTimeout(() => {
                    setVisible(false);
                    window.location.href = '/view';
                }, 4000);
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className={Style.formgroup}>
                    <label htmlFor="enroll_no">Enroll No</label>
                    <input type="text" id="enroll_no" name="enroll_no" onChange={handleit} value={account.enroll_no} required />
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleit} value={account.password} required />
                </div>
                <button type="submit" className='btn'>Login</button><br />
                <p>Don't have account ?<a href="/register/student" className='signup'>Register</a></p>
            </form>
            {visible &&
                <Loggedin visible={visible} />
            }
        </>
    )
}


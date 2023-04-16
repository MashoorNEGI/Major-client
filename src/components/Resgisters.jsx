import React, { useState } from 'react'
import './css/Forms.module.css'
import { setLocalStorageItem } from 'src/utils/Localstorage';
import { Loggedin } from 'src/components/Popup';
import ApiRequest from 'src/API/apirequest';
import Style from 'src/components/css/Forms.module.css'
export const Register1 = () => {
    const [ showPopup, setShowPopup ] = useState(false);
    const [ inputValue, setInputValue ] = useState("");
    const [ labels, setLabels ] = useState([]);
    const [ account, setAccount ] = useState({
        name: '',
        email: '',
        password: '',
        subjects: '',
        classes: '',
    });

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputKeyPress = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            setLabels((prevLabels) => [ ...prevLabels, inputValue.trim() ]);
            setInputValue("");
        }
    };

    const handleLabelRemove = (labelIndex) => {
        setLabels((prevLabels) =>
            prevLabels.filter((_, index) => index !== labelIndex)
        );

        setAccount((prevAccount) => {
            return { ...prevAccount, subjects: labels.filter((_, index) => index !== labelIndex) };
        });
    };

    let username, values
    const handleit = (e) => {
        username = e.target.name
        values = e.target.value
        setAccount({ ...account, [ username ]: values, subjects: [ ...labels ] })
    }
    const handleClose = () => {
        setShowPopup(false);
        window.location = '/schedule'
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await ApiRequest('users/register', 'POST', account, { authorization: false })
            setLocalStorageItem('Data', res.data, new Date().getTime() + 3600 * 1000);
            setShowPopup(true);
        } catch (error) {
            console.warn(error)
        }
    }
    return (
        <>
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className={Style.formgroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={handleit} value={account.name} required />
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleit} value={account.email} required />
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleit} value={account.password} required />
                    <small>Password must contain at least one number, one lowercase and one uppercase letter, and be at least 8 characters long</small>
                </div>
                <div className={Style.formgroup}>
                    <input
                        type="text"
                        placeholder="Add a skill"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleInputKeyPress}
                    />
                </div>
                <div className="label-container">
                    {labels.map((label, index) => (
                        <div key={index} className="label">
                            {label}
                            <span className="remove" onClick={() => handleLabelRemove(index)}>
                                &times;
                            </span>
                        </div>
                    ))}
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="classroom">Classroom</label>
                    <input type="text" id="classroom" name="classes" onChange={handleit} value={account.classes} required />
                </div>
                <button type="submit" className='btn'>Register</button>
            </form>
            {showPopup && (
                <Loggedin close={handleClose} />
            )}
        </>
    )
}

export const Register2 = () => {
    const [ showPopup, setShowPopup ] = useState(false);
    const [ account, setAccount ] = useState({
        name: '',
        enroll_no: '',
        email: '',
        password: '',
        classes: ''
    });
    let username, values
    const handleit = (e) => {
        username = e.target.name
        values = e.target.value
        setAccount({ ...account, [ username ]: values })
    }
    const handleClose = () => {
        setShowPopup(false);
        window.location = '/view'
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(account)
        try {
            const res = await ApiRequest('student/register', 'POST', account, { authorization: false })
            setLocalStorageItem('Data', res, new Date().getTime() + 3600 * 1000);
            setShowPopup(true);
        } catch (error) {
            console.warn(error)
        }
    }
    return (
        <>
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className={Style.formgroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={handleit} value={account.name} required />
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleit} value={account.email} required />
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="text">Enroll Number</label>
                    <input type="text" id="email" name="enroll_no" onChange={handleit} value={account.enroll_no} required />
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleit} value={account.password} required />
                    <small>Password must contain at least one number, one lowercase and one uppercase letter, and be at least 8 characters long</small>
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="classroom">Classroom</label>
                    <input type="text" id="classroom" name="classes" onChange={handleit} value={account.classes} required />
                </div>
                <button type="submit" className='btn'>Register</button>
            </form>
            {showPopup && (
                <Loggedin close={handleClose} />
            )}
        </>
    )
}

import React, { useState } from 'react'
import { setLocalStorageItem } from 'src/utils/Localstorage';
import { Loggedin } from 'src/components/Popup';
import ApiRequest from 'src/API/apirequest';
import Style from 'src/components/css/Login.module.css'
import { useFormik } from 'formik';
import { MdAccountCircle } from 'react-icons/md';
import FormInput from './Form/Forminput';
const studentvalues = {
    name: "",
    email: "",
    enroll_no: "",
    password: "",
    classes: ""
}
const teachervalues = {
    name: "",
    email: "",
    password: "",
    classes: ""
}
export const Register1 = () => {
    const [ visible, setVisible ] = useState(false);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: teachervalues,
        onSubmit: async (values) => {
            try {
                const res = await ApiRequest('users/register', 'POST', values, { authorization: false })
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
                if (error.response.status === 400) {
                    alert(error.response.data.error)
                }
            }
        }
    })
    console.log("🚀 ~ file: Registers.jsx:46 ~ Register1 ~ values:", values)
    return (
        <>
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <FormInput label="Name" type="text" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} required />
                <FormInput label="Email" type="email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                <FormInput label="Enroll Number" type="text" id="enroll_no" name="enroll_no" value={values.enroll_no} onChange={handleChange} onBlur={handleBlur} required />
                <div className={Style.formgroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleChange} onBlur={handleBlur} value={values.password} required />
                    <small>Password must contain at least one number, one lowercase and one uppercase letter, and be at least 8 characters long</small>
                </div>
                <div className={Style.formgroup}>
                    <label htmlFor="classroom">Classroom</label>
                    <input type="text" id="classroom" name="classes" onChange={handleChange} value={values.classes} required />
                </div>
                <button type="submit" className='btn'>Register</button>
            </form>
            {visible && (
                <Loggedin visible={visible} />
            )}
        </>
    )
}

export const Register2 = () => {
    const [ visible, setVisible ] = useState(false);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: studentvalues,
        // validationSchema: teacherschema,
        onSubmit: async (values) => {
            try {
                const res = await ApiRequest('student/register', 'POST', values, { authorization: false })
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
                if (error.response.status === 400) {
                    alert(error.response.data.error)
                }
            }
        }
    })
    return (
        <>
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <FormInput label="Name" type="text" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} required />
                <FormInput label="Email" type="email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                <FormInput label="Enroll Number" type="text" id="enroll_no" name="enroll_no" value={values.enroll_no} onChange={handleChange} onBlur={handleBlur} required />
                <div className={Style.formgroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleChange} onBlur={handleBlur} value={values.password} required />
                    <small>Password must contain at least one number, one lowercase and one uppercase letter, and be at least 8 characters long</small>
                </div>
                <FormInput label="Classroom" type="text" id="classes" name="classes" value={values.classes} onChange={handleChange} onBlur={handleBlur} required />
                <button type="submit" className='btn'>Register</button>
                <hr className='hr' />
                <a className={Style.asbtn}>
                    <MdAccountCircle />
                    Teacher registration
                </a>
            </form>
            {visible &&
                <Loggedin visible={visible} />
            }
        </>
    )
}

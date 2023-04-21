import React, { useState } from 'react'
import { Loggedin } from './Popup'
import Style from './css/Login.module.css'
import { MdAccountCircle } from 'react-icons/md'
import useFormikValues from 'src/Hooks/useFormSubmit';
import FormGroup from './Form/FormGroup';
import PasswordInput from './Form/PasswordInput';
const studentvalues = {
    enroll_no: "",
    password: ""
}
const teachervalues = {
    email: '',
    password: '',
}
export const Teacher = ({ setActiveComponent }) => {
    const [ visible, setVisible ] = useState(false);
    const handleClick = () => {
        setActiveComponent('student');
    };
    const { handleSubmit, handleBlur, handleChange, values } = useFormikValues(teachervalues, 'users/signin', { authorization: false }, setVisible, '/view');
    return (
        <>
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit} data-aos="fade-up">
                <h2>Login</h2>
                <FormGroup label="Email" id="email" name="email" type="text" handleChange={handleChange} handleBlur={handleBlur} value={values.email} required={true} autoComplete='off' />
                <PasswordInput
                containerClassName={Style.formgroup}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                />
                <button type="submit" className='btn'>Login</button><br />
                <p>Don't have account ?<a href="/register/teacher" className='signup'>Register</a></p>
                <hr className='hr' />
                <a className={Style.asbtn} onClick={handleClick}>
                    <MdAccountCircle />
                    Signin as Student
                </a>
            </form>
            {visible &&
                <Loggedin visible={visible} />
            }
        </>
    )
}

export const Student = ({ setActiveComponent }) => {
    const [ visible, setVisible ] = useState(false);
    const handleClick = () => {
        setActiveComponent('teacher');
    };
    const { handleSubmit, handleBlur, handleChange, values } = useFormikValues(studentvalues, 'student/signin', { authorization: false }, setVisible, '/view');
    return <>
        <form className={Style.registerform} method='POST' onSubmit={handleSubmit} data-aos="fade-up">
            <h2>Login</h2>
            <FormGroup label="Enroll No" id="enroll_no" name="enroll_no" type="text" handleChange={handleChange} handleBlur={handleBlur} value={values.enroll_no} required={true} autoComplete='off' />
            <PasswordInput
                containerClassName={Style.formgroup}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
            />
            <button type="submit" className='btn'>Login</button><br />
            <p>Don't have account ?<a href="/register/student" className='signup'>Register</a></p>
            <hr className='hr' />
            <a className={Style.asbtn} onClick={handleClick}>
                <MdAccountCircle />
                Signin as Teacher
            </a>
        </form>
        {visible &&
            <Loggedin visible={visible} />
        }
    </>
}
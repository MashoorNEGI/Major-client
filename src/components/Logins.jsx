import React, { useRef } from 'react'
import Style from './css/Login.module.css'
import { MdAccountCircle } from 'react-icons/md'
import useFormikValues from 'src/Hooks/useFormSubmit';
import FormGroup from './Form/FormGroup';
import PasswordInput from './Form/PasswordInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const studentvalues = {
    enroll_no: "",
    password: ""
}
const teachervalues = {
    email: '',
    password: '',
}
export const Teacher = ({ setActiveComponent }) => {
    const handleClick = () => {
        setActiveComponent('student');
    };
    const { handleSubmit, handleBlur, handleChange, values } = useFormikValues(teachervalues, 'users/signin', { authorization: false }, '/view');
    return (
        <>
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit} data-aos="fade-up">
                <h2>Login</h2>
                <FormGroup label="Email" id="email" name="email" type="text" handleChange={handleChange} handleBlur={handleBlur} value={values.email} required={true} autoComplete='off' />
                <PasswordInput containerClassName={Style.formgroup} handleChange={handleChange} handleBlur={handleBlur} values={values}
                />
                <button type="submit" className='btn'>Login</button><br />
                <p>Don't have account ?<a href="/register" className='signup'>Register</a></p>
                <hr className='hr' />
                <a className={Style.asbtn} onClick={handleClick}>
                    <MdAccountCircle />
                    Signin as Student
                </a>
            </form>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClickrtl={false} pauseOnFocusLoss draggable pauseOnHovert heme="light"
            />
        </>
    )
}

export const Student = ({ setActiveComponent }) => {
    const handleClick = () => {
        setActiveComponent('teacher');
    };
    const { handleSubmit, handleBlur, handleChange, values } = useFormikValues(studentvalues, 'student/signin', { authorization: false },'/view');
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
        <ToastContainer id="login" position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClickrtl={false} pauseOnFocusLoss draggable pauseOnHovert heme="light" />
    </>
}
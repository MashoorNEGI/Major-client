import React from 'react'
import Style from 'src/components/css/Login.module.css'
import { MdAccountCircle } from 'react-icons/md';
import FormInput from '../Form/Forminput';
import FormGroup from '../Form/FormGroup';
import useFormikValues from 'src/Hooks/useFormSubmit';
import PasswordInput from '../Form/PasswordInput';
import SkillsForm from '../Form/SkillsForm';
const studentvalues = {
    name: "", email: "", enroll_no: "", password: "", classes: ""
}
export const Teacher = ({ setActiveComponent }) => {
const [ teachervalues, setTeachervalues ] = React.useState({
    name: "", email: "", "Subject": [], password: "", classes: ""
})
    console.log("🚀 ~ file: Registers.jsx:16 ~ Teacher ~ teachervalues:", teachervalues)
    const handleClick = () => {
        setActiveComponent('student');
    };

    const { handleSubmit, handleBlur, handleChange, values } = useFormikValues(teachervalues, 'users/register', { authorization: false }, '/view');

    return (
        <>
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit} data-aos="fade-up">
                <h2>Register</h2>
                <FormInput label="Name" type="text" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} required />
                <FormInput label="Email" type="email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                <PasswordInput containerClassName={Style.formgroup} handleChange={handleChange} handleBlur={handleBlur} values={values} register />
                <SkillsForm teachervalues={teachervalues} setTeachervalues={setTeachervalues} />
                <button type="submit" className='btn'>Register</button>
                <hr className='hr' />
                <a className={Style.asbtn} onClick={handleClick}>
                    <MdAccountCircle />
                    Register as Student
                </a>
            </form>
        </>
    );
};


export const Student = ({ setActiveComponent }) => {
    const handleClick = () => {
        setActiveComponent('teacher');
    };
    const { handleSubmit, handleBlur, handleChange, values } = useFormikValues(studentvalues, 'student/register', { authorization: false }, '/view');
    return (
        <>
            <form className={Style.registerform} method='POST' onSubmit={handleSubmit} data-aos="fade-up">
                <h2>Register</h2>
                <FormInput label="Name" type="text" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} required />
                <FormInput label="Email" type="email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                <FormInput label="Enroll Number" type="text" id="enroll_no" name="enroll_no" value={values.enroll_no} onChange={handleChange} onBlur={handleBlur} required />
                <PasswordInput containerClassName={Style.formgroup} handleChange={handleChange} handleBlur={handleBlur} values={values} register
                />
                <FormInput label="Classroom" type="text" id="classes" name="classes" value={values.classes} onChange={handleChange} onBlur={handleBlur} required />
                <button type="submit" className='btn'>Register</button>
                <hr className='hr' />
                <a className={Style.asbtn} onClick={handleClick}>
                    <MdAccountCircle />
                    Register as Teacher
                </a>
            </form>
        </>
    )
}

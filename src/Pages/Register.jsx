import React, { useState } from "react";
import { Student, Teacher } from "src/components/Registers";

const Register = () => {
    const [ activeComponent, setActiveComponent ] = useState('student');
    return (
        <>
            {activeComponent === 'student' && <Student setActiveComponent={setActiveComponent} />}
            {activeComponent === 'teacher' && <Teacher setActiveComponent={setActiveComponent} />}
        </>
    )
}

export default Register

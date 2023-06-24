import React, { useState } from "react";
import withAuth from "src/Hooks/Auth";
import { Student, Teacher } from "src/components/services/Registers";

const Register = () => {
    const [ activeComponent, setActiveComponent ] = useState('student');
    return (
        <>
            {activeComponent === 'student' && <Student setActiveComponent={setActiveComponent} />}
            {activeComponent === 'teacher' && <Teacher setActiveComponent={setActiveComponent} />}
        </>
    )
}

export default withAuth(Register, true)

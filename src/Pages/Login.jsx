import React, { useState } from "react";
import { Student, Teacher } from "src/components/services/Logins";
const Login = () => {
    const [ activeComponent, setActiveComponent ] = useState('student');
    return (
        <>
            {activeComponent === 'student' && <Student setActiveComponent={setActiveComponent} />}
            {activeComponent === 'teacher' && <Teacher setActiveComponent={setActiveComponent} />}
        </>
    );
};

export default Login;

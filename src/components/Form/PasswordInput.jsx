import { useState } from 'react';
function PasswordInput(props) {
    const [ showPassword, setShowPassword ] = useState(false);

    function togglePasswordVisibility() {
        setShowPassword(prevState => !prevState);
    }


    return (
        <div className={props.containerClassName}>
            <label htmlFor="Password">Password</label>
            <input
                id="Password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                pattern={props.register ? `^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,}$` : null}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                required
            />
            <i className={showPassword ? "far fa-eye-slash eye" : "far fa-eye eye"} onClick={togglePasswordVisibility} id="togglePassword"></i>
            {props.register ?
                <small>Password must contain at least one number, one lowercase and one uppercase letter, and be at least 8 characters long</small>
                : null
            }
        </div>
    );
}
export default PasswordInput
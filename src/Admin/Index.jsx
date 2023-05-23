import React, { useState, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Slidebar from './Sliderbar';
import Styles from './Admin.module.css';
import withAuth from 'src/Hooks/Auth';
import FormGroup from 'src/components/Form/FormGroup';
import ApiRequest from 'src/API/apirequest';

const ICON_SIZE = 20;

const Controls = () => {
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const email = inputRef.current.value;
        const res = await ApiRequest('teacher-timetable', 'POST', { email }, { authorization: false });
        res && navigate(`/controls/${email.split('@')[ 0 ]}`);
    };

    const [ navVisible, showNavbar ] = useState('');

    return (
        <>
            <Slidebar visible={navVisible} show={showNavbar} ICON_SIZE={ICON_SIZE} />
            {window.location.pathname === '/controls' ? (
                <div className={Styles.grid}>
                    <div className={`${Styles.Child}`}>
                        <FormGroup
                            inputRef={inputRef}
                            label="Teacher's Email"
                            id="Teacher's Email"
                            name="Email"
                            type="Email"
                            required={true}
                            autoComplete="off"
                        />
                    </div>
                    <div className={Styles.Child}>
                        <button type="submit" onClick={handleSubmit} className={`btn`}>
                            Generate
                        </button>
                    </div>
                </div>
            ) : (<Outlet />)}
        </>
    );
};

export default withAuth(Controls, true);

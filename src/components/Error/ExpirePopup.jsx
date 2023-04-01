import React from 'react';
import Style from './css/session.module.css';

const SessionExpiredPopup = ({ onClose }) => {
    return (
        <div className={Style.sessionexpiredpopup}>
            <div className={`${Style.popupcontent} animate__animated animate__zoomIn`}>
                <h2>Session Expired</h2>
                <p>Your session has expired. Please log in again.</p>
                <button className={Style.closebutton} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SessionExpiredPopup;

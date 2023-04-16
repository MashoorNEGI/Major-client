import Style from './css/Popup.module.css'
import Style1 from './css/session.module.css';
export const Loggedin = ({ visible }) => {
    return (
        <div
            className={Style.notification}
            style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? 1 : 0 }}
        >
            <p>You are Logged in</p>
            <span className={Style.notification__progress}></span>
        </div>
    )
}
export const Loggedout = () => {
    return (
        <div className={Style.popup}>
            <div className='animate__animated animate__zoomIn animate__faster'>
                <p>You are logged out</p>
            </div>
        </div>
    )
}
export const Warning = ({ onClose }) => {
    return (
        <div className={Style1.sessionexpiredpopup}>
            <div className={`${Style1.popupcontent} animate__animated animate__zoomIn`}>
                <h2>Please Login</h2>
                <p>looks like you don't have permission</p>
                <button className={Style1.closebutton} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};


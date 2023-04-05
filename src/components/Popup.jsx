import Style from './css/Popup.module.css'
import Style1 from './css/session.module.css';
export const Loggedin = ({ close }) => {
    return (
        <div className={Style.popup}>
            <div className='animate__animated animate__zoomIn animate__faster'>
                <p>You are logged in</p>
                <button onClick={close}>Close</button>
            </div>
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
export const Session = ({ onClose }) => {
    return (
        <div className={Style1.sessionexpiredpopup}>
            <div className={`${Style1.popupcontent} animate__animated animate__zoomIn`}>
                <h2>Please Login</h2>
                <p>looks like you didn't logged in yet</p>
                <button className={Style1.closebutton} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

import React from 'react'
import Style from './css/Loader.module.css'
export const Loader = () => {
    return (
        <div className={Style.loading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export const APIloader = () => {
    return (
        <div className={Style.center}>
            <svg className={Style.pl} width="240" height="240" viewBox="0 0 240 240">
                <circle className={`${Style.pl__ring} ${Style.pl__ringa}`} cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                <circle className={`${Style.pl__ring} ${Style.pl__ringb}`} cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                <circle className={`${Style.pl__ring} ${Style.pl__ringc}`} cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                <circle className={`${Style.pl__ring} ${Style.pl__ringd}`} cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
            </svg >
        </div>
    )
}

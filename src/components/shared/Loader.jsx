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
        <div className={Style.API}>
            <div className={Style.spinner}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

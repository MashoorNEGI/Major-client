import React from 'react'
import { getLocalStorageItem } from '../../utlis/Localstorage';
import Session from '../Error/ExpirePopup'
const Protected = ({ Component }) => {
  const handleCloseSessionExpiredPopup = () => {
    window.location = '/login'
  };
  const App = () => {
    if (getLocalStorageItem('Data')) {
      return <Component />
    } else {
      return <Session onClose={handleCloseSessionExpiredPopup} />
    }
  }
  return (
    <>
      {
        App()
      }
    </>
  )
}

export default Protected

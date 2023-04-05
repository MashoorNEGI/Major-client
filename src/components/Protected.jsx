import React from 'react'
import { getLocalStorageItem } from 'src/utils/Localstorage';
import { Session } from 'src/components/Popup'
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

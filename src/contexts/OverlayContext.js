import React, { useState } from 'react'

export const OverlayContext = React.createContext({
  isOverlayActive: false,
  toggleOverlay: () => {
    console.log('hey ehy ')},
})

const OverlayContextProvider = (props) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <OverlayContext.Provider value={isActive}>
      {props.children}
    </OverlayContext.Provider>
  )
}
export default OverlayContextProvider

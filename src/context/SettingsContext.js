import React, { createContext } from 'react'

export const SettingsContext = createContext()

const SettingsContextProvider = (props) => {
  return (
    <SettingsContext.Provider value={{}}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider

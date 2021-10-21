import React, { createContext, useState } from 'react'

export const SettingsContext = createContext()

const SettingsContextProvider = (props) => {

  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function startTimer() {
    setStartAnimate(true)
  }

  function pauseTimer() {
    setStartAnimate(false)
  }

  function stopTimer() {
    setStartAnimate(false)
  }

  const SettingBtn = () => {
    setExecuting({});
    setPomodoro(0)
  }

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    })
    setTimerTime(executing)
  }

  const updateExecute = updatedSettings => {
    setExecuting(updatedSettings)
    setTimerTime(updatedSettings)
  }

  const setTimerTime = evalue => {
    switch (evalue.active) {
      case 'work':
        setPomodoro(evalue.work)
        break;
      case 'short':
        setPomodoro(evalue.short)
        break;
      case 'long':
        setPomodoro(evalue.long)
        break;

      default:
        setPomodoro(0)
        break;
    }
  }

  const children = ({remainingTimer}) => {
    const minutes = Math.floor(remainingTimer /60)
    const seconds = remainingTimer % 60

    return `${minutes}:${seconds}`
  }

  return (
    <SettingsContext.Provider 
    value={{ 
      stopTimer, 
      updateExecute,
      pomodoro,
      executing,
      startAnimate,
      startTimer,
      pauseTimer,
      stopTimer,
      SettingBtn,
      setCurrentTimer,
      updateExecute,
      children
       }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider

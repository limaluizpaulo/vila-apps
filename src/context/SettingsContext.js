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

  function stopAnimate() {
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

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    
    return `${minutes}:${seconds}`
    }

  return (
    <SettingsContext.Provider
      value={{
        stopAnimate,
        updateExecute,
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        SettingBtn,
        setCurrentTimer,
        children
      }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider

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

  return (
    <SettingsContext.Provider value={{ stopTimer, updateExecute }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider

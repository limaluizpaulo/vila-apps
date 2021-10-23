import React, { useState, useContext } from 'react'
import {SettingsContext} from '../context/SettingsContext'

const SetPomodoro = () => {
  const { updateExecute } = useContext(SettingsContext)

  const [newTimer, setNewTimer] = useState({
    work: 0.41,
    short: 0.07,
    long: 0.16,
    active: 'work'
  })

  const handleChange = input => {
    const { name, value } = input.target;
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value)
        })
        break;

      case 'shortBreak':
        setNewTimer({
          ...newTimer,
          short: parseInt(value)
        })
        break;

      case 'longBreak':
        setNewTimer({
          ...newTimer,
          long: parseInt(value)
        })
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer)
  }
  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="input"
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work} />

          <input
            className="input"
            type="number"
            name="shorBreak"
            onChange={handleChange}
            value={newTimer.short} />

          <input
            className="input"
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long} />

        </div>
        <button type='submit'>Definir Cronometro</button>
      </form>

    </div>
  )
}

export default SetPomodoro

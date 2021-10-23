import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {SettingsContext} from '../context/SettingsContext'

const Animation = ({ key , timer , animate , children }) => {


  const { stopAnimate } = useContext(SettingsContext)

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer}
      strokeWidth={6}
      size={220}
      colors={ [
        ['#f5ae23', 0.33],
        ['#f5ae23', 0.33],
        ['#f5ae23', 0.33],
      ] }
      trailColor="#4E2559"
      onComplete={() => {
        stopAnimate()
      }}
    >
      {children}
    </CountdownCircleTimer>
  )
}

export default Animation

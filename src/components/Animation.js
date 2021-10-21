import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {SettingsContext} from '../context/SettingsContext'

const Animation = ({ key , timer , animate , children }) => {


  const { stopAnimate } = useContext(SettingsContext)

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer *60}
      strokeWidth={6}
      size={220}
      colors={ [
        ['#4e2559', 0.33],
        ['#f5ae23', 0.33],
        ['#34bf98', 0.33],
      ] }
      trailColor="#151932"
      onComplete={() => {
        stopAnimate()
      }}
    >
      {children}
    </CountdownCircleTimer>
  )
}

export default Animation

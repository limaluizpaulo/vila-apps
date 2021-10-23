import SetPomodoro from "./components/SetPomodoro";
import React, { useContext,useEffect} from "react"
import Animation from "./components/Animation";
import { SettingsContext } from "./context/SettingsContext";
import Button from "./components/Button";
import logo from "./assets/logo.png";

function App() {
  const { 
    pomodoro,
    executing,
    setCurrentTimer,
    SettingBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute,
    stopAnimate} = useContext(SettingsContext)

    useEffect(() => {
      updateExecute(executing)
    }, [executing, startAnimate])

  return (
    <div className="container">
      <img src={logo} alt="Vila Apps" />
      <small>Seja Produtivo da forma correta</small>
      {pomodoro !== 0 ?
      <>
        <ul className="labels">
          <li>
            <Button 
              title="Trabalhar" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <Button 
              title="Pausa Curta" 
              activeClass={executing.active === 'short' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('short')} 
            />
          </li>
          <li>
            <Button 
              title="Pausa Longa" 
              activeClass={executing.active === 'long' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('long')} 
            />
          </li>
        </ul>
        <Button title="Configurações" _callback={SettingBtn} />
        <div className="timer-container">
          <div className="time-wrapper">
              <Animation
                key={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </Animation>
          </div>
        </div>
        <div className="button-wrapper">
          <Button title="Start" activeClass={!startAnimate ? 'active-label' : undefined} _callback={startTimer} />
          <Button title="Pause" activeClass={startAnimate ? 'active-label' : undefined} _callback={pauseTimer} />
          <Button title="Stop" activeClass={startAnimate ? 'active-label' : undefined} _callback={stopAnimate} />
        </div>
      </> : <SetPomodoro />}
    </div>
  )
}

export default App;

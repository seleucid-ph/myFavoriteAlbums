import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [screen, setScreen] = useState("splash")
  const [count, setCount] = useState(0)

  function goToNum10(){
    setScreen("num10")
  }

  return (
    <>
      <div className="parent">
      {screen === "splash" && (
        <div className="splashScreen">
          <h2>This is the start screen</h2>
          <button onClick={goToNum10}>Start the list</button>
        </div>
      )}

      {screen === "num10" && (
        <div className="numberedEntry">
          <p>Number 10:</p>
        </div>
      )}

      </div>
    </>
    
  )
}

export default App

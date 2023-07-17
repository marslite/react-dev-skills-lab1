import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillList from './SkillList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList/>

    </div>
    </>
  )
}

export default App

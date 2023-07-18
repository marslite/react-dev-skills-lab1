import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App padding-0 teal-text">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>

      <hr />
      <NewSkillForm/>

    </div>
    </>
  )
}

export default App

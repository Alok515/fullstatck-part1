import Button from "./components/Button"
import { useState } from "react"
import Statistics from "./components/Statistics"


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleClick = (setVal, val) => {
    return () => {
      setVal(val + 1)
    }
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleClick(setGood, good)} text={'good'}/>
      <Button handleClick={handleClick(setNeutral, neutral)} text={'neutral'}/>
      <Button handleClick={handleClick(setBad, bad)} text={'bad'}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

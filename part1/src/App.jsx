import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral,bad}) => {

  const total =  good + neutral + bad
  
  const average = (good +neutral*0+bad*(-1))/total
  
  const positive = (good *100)/total
  
  if (total==0){
    return (
      <div>
        <h3>No feedback given</h3>
      </div>
    )  
  }
  else{
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>All {total}</p>
        <p>Average {average}</p>
        <p>Positive {positive}</p>
      </div>
    )
  }
  
}

const App = () => {
  
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral( neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  
  const total = () => {
    return good + neutral + bad
  }
  const average = () => {
    return (good +neutral*0+bad*(-1))/total()
  }
  const positive = () => {
    return (good *100)/total()
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={handleGoodClick} text='Good' />      
      <Button handleClick={handleNeutralClick} text='Neutral' />      
      <Button handleClick={handleBadClick} text='Bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
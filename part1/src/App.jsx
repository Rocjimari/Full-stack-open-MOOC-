import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine  = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  
  )
} 
const Statistics = ({good, neutral,bad}) => {

  const total = () =>  good + neutral + bad
  
  const average =  () =>(good +neutral*0+bad*(-1))/total()
  
  const positive = () => (good *100)/total()
  
  if (total()==0){
    return (
      <div>
        <h3>No feedback given</h3>
      </div>
    )  
  }
  else{
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='All' value={total()} />
          <StatisticLine text='Average' value={average()} />
          <StatisticLine text='Positive' value={positive()} />
        </tbody>
      </table>
    )
  }
  
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)

  
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
  const random = () => {
    const random = Math.floor(Math.random()*8)
    return random
  }
  const handleRandomClick = () => {
    const selected = random()
    setSelected(selected)
    console.log('actualizacion selected',selected)

  }



  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  

  const handleVotes = () => {
    const copy = { ...votes }
    copy[selected] += 1
    setVotes(copy)
    console.log('Anecdota',selected,'valor', copy[selected])  
  }
  
  

  
 

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={handleGoodClick} text='Good' />      
      <Button handleClick={handleNeutralClick} text='Neutral' />      
      <Button handleClick={handleBadClick} text='Bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes </p>
      <Button handleClick={handleVotes} text ='vote' /> 
      <Button handleClick={handleRandomClick} text ='next anecdote' /> 
      
    
      
    </div>
  )
}

export default App
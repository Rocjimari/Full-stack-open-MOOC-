import { useState } from 'react'

// estado de la app
const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
}

// componente button para los botones de la app
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {

  const [ counter, setCounter ] = useState(0)


  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>

      <Button 
        onClick={increaseByOne}//controlador de eventos a traves de la propiedad onClick
        text='plus'
      />

      <Button 
        onClick={setToZero}
        text='zero'
      />

      <Button 
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}
export default App
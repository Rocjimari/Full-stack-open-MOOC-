


const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course} </h1>
    </div>

  )
}
 
const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.name}  {props.exercise}</p>
    </div>

  )

}


const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.number} </p>
    </div>

  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Part name={part1.name} exercise={part1.exercises} />
      <Part name={part2.name} exercise={part2.exercises} />
      <Part name={part3.name} exercise={part3.exercises} />
      <Total number={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}


export default App
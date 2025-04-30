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
      <p>{props.part}  {props.exercise}</p>
    </div>

  )

}
const Content = ({content}) => {
  console.log({content})
  return(
    <div>
      <Part part={content[0].part} exercise={content[0].exercise} />
      <Part part={content[1].part} exercise={content[1].exercise} />
      <Part part={content[2].part} exercise={content[2].exercise} />
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
  const content = [
    {part: 'Fundamentals of React', exercise:10 },
    {part: 'Using props to pass data', exercise:7 },
    {part: 'State of a component', exercise:14 },

  ]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total number={content[0].exercise+content[1].exercise+content[2].exercise} />
    </div>
  )
}


export default App
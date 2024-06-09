const Header = (props) =>   {
  console.log(props)
    return (
      <div>
        <h1><strong>{props.header.name}</strong></h1>
      </div>
    )
  }


const Part1 = (props) => {
  return(
    <p>{props.p1} </p>
  )
}

const Part2 = (props) => {
  return(
    <p>{props.p2}</p>
  )
}

const Part3 = (props) => {
  return(
    <p>{props.p3}</p>
  )
}

const Content = (parts) => {
 console.log(parts)
return(
  <>
      <Part1 p1 = {parts.parts.parts[0].name + " " + parts.parts.parts[0].exercises}/>
      <Part2 p2 = {parts.parts.parts[1].name + " " + parts.parts.parts[1].exercises}/>
      <Part3 p3 = {parts.parts.parts[2].name + " " + parts.parts.parts[2].exercises}/>
      
  </>

  )
}

const Total = (props) =>   {
   console.log(props)
  return (
    <div>
      <p>Total Number of Excercises {props.total.parts[0].exercises+props.total.parts[1].exercises+props.total.parts[2].exercises}</p>
    </div>
  )
}




const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  

  return (
    <div>
      <Header header={course}/>
      <Content parts = {course}  />
      <Total total={course}/>
    </div>
  )
}

export default App
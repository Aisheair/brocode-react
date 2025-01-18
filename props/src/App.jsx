// props = read-only properties that are shared between 
//         components
// A parent component can send data to a child componenet
//              <componenet key=value/>


// propTypes = a mechanism that ensures that the passed value 
//             is of the correct datatype
//             age: PropTypes.number



import Student from "./Student"

function App(){
  return(
    <>
      <Student name="Spongebob" age={30} isStudent= {true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Ankit"/>
    </>
  )
}

export default App 


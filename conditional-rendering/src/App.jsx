// conditional rendering = allows you to controle what gets render
//                         in your application based on certain conditions
//                         (show, hide, or change componenets)

import UserGreading from "./UserGreading"

function App() {

  return (
    <>
        <UserGreading isLoggedIn={true} username="Ankit"/>
    </>
  )
}

export default App

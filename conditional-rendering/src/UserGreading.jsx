import propsTypes from 'prop-types'
function UserGreading(props){
    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please Loged In To Continue</h2>
    // }

    // return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : 
    //     <h2 className="loggedIn-promt">Please Loged In To Continue</h2>)


    const welcomeMessage = <h2 className="welcome-message">
                           Welcome {props.username}</h2>

    const loggedInPromt = <h2 className="loggedIn-promt">
                          Please Loged In To Continue</h2>                       

    return(props.isLoggedIn ? welcomeMessage : loggedInPromt)

}

UserGreading.propstypes = {
    isLoggedIn: propsTypes.bool,
    username: propsTypes.string
}
UserGreading.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreading
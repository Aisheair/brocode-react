// import style from "./Button.module.css"

// function Button(){
    
//     return(
//             <button className={style.button}>Click me</button>
//     )
// }// MODULES

function Button(){

    const style = {
        
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "3rem"
          //inline
    }
    
    return(
            <button style={style}>Click me</button>
    )
}

export default Button
import React from 'react';

const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"40px"
}

const button = {
    textDecoration:"none",
    border:"none",
    padding:"8px",
    borderRadius:"20px",
    width:"160px",
    fontFamily:"'Courier New', Courier, monospace",
    backgroundColor:"black",
    color:"white",
    fontWeight:"bold",
    cursor:"pointer",
}

function Button(props){
    return(
        <div style ={center}>
            <button style={button}>{props.name}</button>
        </div>
    )
}

export default Button;
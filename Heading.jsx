import React from 'react';
import './PostPage.css';

const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"50px"
}

function Heading(props){
    return(
        <div style ={center}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Heading;
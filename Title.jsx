import React from "react";
import './PostPage.css';

const style = {
    width:"70%"
}

function Title(props){
    return(
        <div className="Center">
            <p><b>{props.heading}</b></p>
            <input
            type="text"
            placeholder={props.placeholder}
            style={style}
            name= {props.name}
            onChange = {props.onChange}
            value = {props.value}
            >
            </input>
        </div>
    )
}

export default Title;
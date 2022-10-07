import React from "react";
import './PostPage.css';

const style = {
    width:"70%",
}

function Problem(props){
    return(
        <div>
            <p className="Center"><b>{props.heading}</b></p>
            <div className="Center">
            <textarea
            type="text"
            placeholder={props.placeholder}
            rows={props.rows}
            style={style}
            name= {props.name}
            onChange = {props.onChange}
            value = {props.value}
            >
            </textarea>
            </div>
        </div>
    )
}

export default Problem;
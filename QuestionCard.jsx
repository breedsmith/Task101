import React from "react";
import './QuestionCard.css';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const QuestionCard = (props)=> {
    return(
    <div style={style}>
        <div className="QuestionCard">
            <div className="questionTitle">
                <p id="question-text" style={style}><b>{props.title}</b></p>
            </div>
            <div className="delete">
                <button>X</button>
            </div>
        <div className="question">
            <p>{props.question}</p>
        </div>
        <div className="author">
            <p>By {props.author}</p>
        </div>
        <button className="more" id="see-more" style={style}>See More...</button>
        </div>
    </div>
    )
}

export default QuestionCard;
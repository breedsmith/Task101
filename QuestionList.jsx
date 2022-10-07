import React, {useContext, useState, useEffect} from 'react'
import QuestionCard from './QuestionCard'
import {QuestionContext} from './context/question.context'
import './QuestionCard.css';
import { query, where } from "firebase/firestore";

function QuestionList (props)

{
    const {questions} = useContext(QuestionContext)
    // const [filteredQuestionsState, setFQS] = useState([])

    // useEffect(()=>{
    //     const fetchQuestionMap = async() =>{
    //         const questionMap = await Object.values(questions);
    //         try{
    //             setFQS(questionMap)
    //         }
    //         catch(error){
    //             console.log(error.message)
    //         }
    //     }
    //     fetchQuestionMap();
    //     console.log(filteredQuestionsState)

    // }, [filteredQuestionsState])

    const arrayQuestions = Object.values(questions);

    const filteredQuestions = arrayQuestions.filter((arrayQuestions)=>{
        return arrayQuestions.title.toLowerCase().includes(props.searchQuestion.toLowerCase())
    })


    return <div className='QuestionCards'>
        {filteredQuestions.map((questions) =>
        <QuestionCard
        key = {questions.userUid}
        title = {questions.title}
        question = {questions.problem}
        author = {questions.userEmail}
        />
        )}
    </div>
}

export default QuestionList

/*{filteredQuestion.map((questions) =>
<QuestionCard
key = {questions.userUid}
title = {questions.title}
question = {questions.problem}
author = {questions.userEmail}
/>
)}*/
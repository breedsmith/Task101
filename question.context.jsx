import React from "react";
import { createContext, useState, useEffect} from "react";
import { fetchQuestionAndDocuments } from "../utils/firebase";

export const QuestionContext = createContext(
    {
        questions: {},
    }
)

export const QuestionProvider = ({children}) =>{
    const [questions, setQuestions] = useState({})
    useEffect(()=>{
        const fetchQuestionMap = async() =>{
            const questionMap = await fetchQuestionAndDocuments();
            try{
                setQuestions(questionMap)
            }
            catch(error){
                console.log(error.message)
            }
        }
        fetchQuestionMap();
    }, [])
    const value = {questions}
    return(
        <QuestionContext.Provider value = {value}> {children}</QuestionContext.Provider>
    )
}
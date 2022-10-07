import React,{useState, useEffect} from "react";
import Title from "./Title";
import Problem from "./Problem";
import './PostPage.css';
import { createQuestionDocFromAuth } from './utils/firebase'
import {getAuth} from "firebase/auth";

const Question=(props)=>{

    const [user, setUser] = useState()
    const auth = getAuth()

    useEffect( ()=>{
        setUser(auth.currentUser)
    }, [])

    const [question, setQuestion] = useState({
        title: '',
        problem: '',
        tags:''
    })

    const {title, problem, tags} = question;

    const handleChange = (event)=>{
        const {name, value} = event.target
        setQuestion ((preValue)=>{
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        if(user){
            try{
                await createQuestionDocFromAuth(question, user);
            }
            catch(error){
                console.log('error in creating question', error.message)
            }

        } else{
            alert("You must log in to post a question")
        }

    }

    return(
        <div>
            <Title heading="Title: " placeholder="Start your question with how, what, why, etc" name="title" value={question.title} onChange = {handleChange}/>
            <Problem heading="Describe your problem: " rows="15" name="problem" value={question.problem} onChange = {handleChange} />
            <Title heading="Tags: " placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" name="tags" value={question.tags} onChange = {handleChange}/>
            <div className="Center">
                <button onClick={handleSubmit}>Post</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Question;
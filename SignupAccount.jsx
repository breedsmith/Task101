import React,{useState} from 'react'
import { Link } from "react-router-dom";
import Input from './Input';
import './Login.css';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/firebase'
import {Navigate, useNavigate} from "react-router-dom";

const style = {
    color:"blue",
    fontSize:"15px"
}

const SignupAccount =(props)=>{

    const [contact, setContact] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword:''
    })
    const {displayName, email, password, confirmPassword} = contact;
    const navigate = useNavigate()

    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        if (password !== confirmPassword){
            alert('Passwords do not match!')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth(user, {displayName});
            alert('success! Account has been created')
            navigate("/login");
        }
        catch(error){
            console.log('error in creating user', error.message)
        }
    }

    return(

        <div className="login">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Create a DEV@Deakin Account:</h1>
            <h2>Name:</h2>
            <div className='center'>
                <Input
                name= 'displayName'
                type= 'text'
                placeholder ='name'
                onChange = {handleChange}
                value = {contact.displayName}
                />
            </div>
            <h2>Email:</h2>
            <div className='center'>
                <Input
                name= 'email'
                type= 'text'
                placeholder ='email'
                onChange = {handleChange}
                value = {contact.email}
                />
            </div>
            <h2>Password:</h2>
            <div className='center'>
                <Input
                name= 'password'
                type= 'password'
                placeholder ='password'
                onChange = {handleChange}
                value = {contact.password}
                />
            </div>
            <h2>Confirm Password:</h2>
            <div className='center'>
                <Input
                name= 'confirmPassword'
                type= 'password'
                placeholder ='confirm password'
                onChange = {handleChange}
                value = {contact.confirmPassword}
                />
            </div>
            <br></br>
            <div className='center'>
                <button onClick={handleSubmit}>
                    Sign Up
                </button>
            </div>
            <br></br>
            <div className='center'>
                <Link to='/login' style={style}>
                    Login
                </Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default SignupAccount;
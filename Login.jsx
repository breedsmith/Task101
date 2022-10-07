import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserDocFromAuth, signinAuthUserWithEmailAndPassword, signInWithGooglePopup} from './utils/firebase';
import {getAuth} from "firebase/auth";
import { UserContext } from './context/user.context'
import Input from './Input';
import './Login.css';

const style = {
    color:"blue",
    fontSize:"15px"
}

const google = {
    width:"150px"
}

const Login = (props)=> {

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
        navigate("/homepage")
    }

    const auth = getAuth()

    const onLogout = () => {
        try{
            auth.signOut();
            alert("Logged out successfully.")
        }
        catch{
            alert("Can't log out because no one is signed in.")
        }
        navigate("/");
    }

    const {setCurrentUser} = useContext(UserContext)
    const [contact, setContact] = useState({
        email: '',
        password: ''
    })
    const {email, password} = contact

    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const navigate = useNavigate()
    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        try{
            const {user} = await signinAuthUserWithEmailAndPassword(email,password);
            //console.log(response)
            setCurrentUser(user)
            console.log(user)
            navigate("/homepage")
        }
        catch(error){
            console.log('error in login', error.message)
            if(error.message.includes("wrong-password")) {
                alert("Incorrect username/password")
            }
        }
    }

    return(
        <div className="login">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Your Email:</h2>
            <div className='center'>
                <Input
                name= 'email'
                type= 'text'
                placeholder ='email'
                onChange = {handleChange}
                value = {contact.email}
                />
            </div>
            <h2>Your Password:</h2>
            <div className='center'>
                <Input
                name= 'password'
                type= 'password'
                placeholder ='password'
                onChange = {handleChange}
                value = {contact.password}
                />
            </div>
            <br></br>
            <div className='center'>
                <button onClick={handleSubmit}>
                    Login
                </button>
            </div>
            <br></br>
            <div className='center'>
                <button onClick={logGoogleUser} style={google}>
                    Login with Google
                </button>
            </div>
            <br></br>
            <div className='center'>
                <button onClick={onLogout}>
                    Logout
                </button>
            </div>
            <br></br>
            <div className='center'>
                <Link to='/signup' style={style}>
                    Sign Up
                </Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Login;
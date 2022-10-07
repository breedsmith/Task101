import React,{useState} from "react";
import './signup.css';


function Signup(){

    const[emailState, setEmail] = useState("")

    const handleEmail = (e)=> {
        setEmail(e.target.value)
    }

    const handleClick = async(e)=> {
        e.preventDefault()

        await fetch("http://localhost:8000/", {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: emailState,
            })
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
    }

    console.log(emailState)

    return(
        <div className="signup">
            <form>
                <div class="form-container">
                    <h3 class="form-item">SIGN UP FOR OUR DAILY INSIDER</h3>
                    <div class="form-item">
                        <input type="email" name="email" placeholder=" Enter your email" required="required" onChange={handleEmail}></input>
                    </div>
                    <div class="form-item">
                    <button type="submit" onClick={handleClick}>Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;
require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const sgMail = require("@sendgrid/mail");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
sgMail.setApiKey(process.env.SENDGRID_API_KEY); //The API Key goes in here but I removed so I don't make it public

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/indexNode.html")
})

const sendMail = async (msg) => {
    try{
        await sgMail.send(msg);
        console.log("Message sent successfully!");
    }catch (error){
        console.log(error);

        if(error.response){
            console.error(error.response.body)
        }
    }
}

app.post('/', (req,res)=>{
    console.log(req.body)
    sendMail({
    to: req.body,
    from: "breeloves1d12@gmail.com",
    subject: "DEV-DEAKIN NEWSLETTER",
    text: "Thank you for signing up to Dev Deakin's Newsletter"
    })
})

app.listen(8000, function (request, response){
    console.log("Server is running on port 8000")
})
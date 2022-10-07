import React,{useState, useEffect} from "react";
import Title from "./Title";
import Problem from "./Problem";
import './PostPage.css';
import ImageUpload from "./ImageUpload";
import { createArticleDocFromAuth } from './utils/firebase'
import {getAuth} from "firebase/auth";


/*
    <Title heading="Title" placeholder="Enter a descriptive title"/>
    <ImageUpload heading="Add an image: "></ImageUpload>
    <Problem heading="Abstract: " placeholder="Enter a 1-paragraph abstract" rows="5" />
    <Problem heading="Article Text: " placeholder="Enter a 3-paragraph article text" rows="15" />
    <Title heading="Tags" placeholder="Please add up to 3 tags to describe what your article is about e.g., Java" />
*/

const ArticleTemplate=(props)=>{

    const style = {
        width:"70%"
    }

    const [user, setUser] = useState()
    const auth = getAuth()

    useEffect( ()=>{
        setUser(auth.currentUser)
    }, [])


    const [article, setArticle] = useState({
        title: '',
        image: '',
        abstract: '',
        articleText:'',
        tags:''
    })

    const {title, image, abstract, articleText, tags} = article;

    const handleChange = (event)=>{
        const {name, value} = event.target
        setArticle ((preValue)=>{
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
                await createArticleDocFromAuth(article, user);
                alert("Article Posted!");
            }
            catch(error){
                console.log('error in creating article', error.message)
            }
        }else{
            alert("You must log in to post an article")
        }

    }

    return(
        <div>
            <div className="Center">
                <p><b>Title</b></p>
                <input
                name= "title"
                type="text"
                placeholder="Enter a descriptive title"
                style={style}
                onChange = {handleChange}
                value = {article.title}
                >
                </input>
            </div>
            <div className="Center">
                <p><b>Add an image: </b></p>
                <input
                name= "image"
                type="file"
                accept="image/*"
                className="fileSelect"
                onChange = {handleChange}
                value = {article.image}
                >
                </input>
                <button>Upload</button>
            </div>
            <div>
                <p className="Center"><b>Abstract: </b></p>
                <div className="Center">
                    <textarea
                    name= "abstract"
                    type="text"
                    placeholder="Enter a 1-paragraph abstract"
                    rows="5"
                    style={style}
                    onChange = {handleChange}
                    value = {article.abstract}
                    >
                </textarea>
                </div>
            </div>
            <div>
                <p className="Center"><b>Article Text: </b></p>
                <div className="Center">
                    <textarea
                    name= "articleText"
                    type="text"
                    placeholder="Enter a 3-paragraph article text"
                    rows="15"
                    style={style}
                    onChange = {handleChange}
                    value = {article.articleText}
                    >
                </textarea>
                </div>
            </div>
            <div className="Center">
                <p><b>Tags</b></p>
                <input
                name= "tags"
                type="text"
                placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
                style={style}
                onChange = {handleChange}
                value = {article.tags}
                >
                </input>
            </div>
            <div className="Center">
                <button onClick={handleSubmit}>
                    Post
                </button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default ArticleTemplate;
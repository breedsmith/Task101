import { initializeApp } from "firebase/app";
import {useContext} from 'react'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection, query, getDocs, where} from 'firebase/firestore';
import {QuestionContext} from '../context/question.context'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQevRB4BlC8cUoOt9Qje62v9_BOnRwzQM",
    authDomain: "dev-deakin-app.firebaseapp.com",
    projectId: "dev-deakin-app",
    storageBucket: "dev-deakin-app.appspot.com",
    messagingSenderId: "619950792372",
    appId: "1:619950792372:web:816428b03807292a2ac1e1"
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 
   provider.setCustomParameters ({
    prompt:"select_account"
   });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocFromAuth = async (userAuth, additonalInformation ={}) => {
    if(! userAuth.email) return;
    const userDocRef= doc(db, 'users', userAuth.uid ) //sets up doc

    const userSnapshot = await getDoc(userDocRef); //retrives doc

    if(! userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try { //add new entry in doc
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additonalInformation
            })
        }
        catch (error){
        console.log('error in creating ' , error.message)
        }
    }

    return userDocRef;
  }

  export const createArticleDocFromAuth = async (articleAuth, user ={}) => {
    console.log(articleAuth);
    const articleDocRef= doc(collection(db, 'article')); //sets up doc

    const articleSnapshot = await getDoc(articleDocRef); //retrives doc

      if(! articleSnapshot.exists()){
          const {title, image, abstract, articleText, tags} = articleAuth;
          const createdAt = new Date();
          const userEmail = user.email;
          const userUid = user.uid;

          try { //add new entry in doc
              await setDoc(articleDocRef, {
                  title,
                  image,
                  abstract,
                  articleText,
                  tags,
                  createdAt,
                  userEmail,
                  userUid
              })
          }
          catch (error){
          console.log('error in creating ' , error.message)
          }
      }

    return articleDocRef;
  }

  export const createQuestionDocFromAuth = async (questionAuth, user ={}) => {
    console.log(questionAuth);
    const questionDocRef= doc(collection(db, 'questions')); //sets up doc

    const questionSnapshot = await getDoc(questionDocRef); //retrives doc

    if(! questionSnapshot.exists()){
        const {title, problem, tags} = questionAuth;
        const createdAt = new Date();
        const userEmail = user.email;
        const userUid = user.uid;

        try { //add new entry in doc
            await setDoc(questionDocRef, {
                title,
                problem,
                tags,
                createdAt,
                userEmail,
                userUid
            })
            alert("Question Posted!");
        }
        catch (error){
        console.log('error in creating ' , error.message)
        }
    }

    return questionDocRef;
  }

  export const fetchQuestionAndDocuments = async () =>{
    const collectionRef = collection(db, 'questions')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q);
     const questionMap = querySnapshot.docs.reduce((acc, docSnapshot) =>{
      const { createdAt , ...items } = docSnapshot.data();
      acc[createdAt] = items
      return acc;
     }, {})
     return questionMap;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password)
  }
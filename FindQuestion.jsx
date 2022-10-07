import React, {useState} from 'react';
import './FindQuestion.css';
import QuestionCard from './QuestionCard';
import QuestionList from './QuestionList';

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const FindQuestion = (props)=> {

    const [searchTerm , setsearchTerm] = useState('')

    function onSearchChange(e)
    {
      setsearchTerm(e.target.value)
    }

    return(
        <div className='main'>
            <div className='heading'>
                <h1>FIND QUESTION:</h1>
            </div>
            <div className="filter" style={style}>
                <input type="text" id="search-bar-filter" placeholder='Search...' onChange={onSearchChange} value={searchTerm}></input>
                <select name="filter" id="standard-select" style={style}>
                    <option value="title">Title</option>
                    <option value="date"> Date</option>
                    <option value="tags"> Tags</option>
                </select>
            </div>
            <QuestionList searchQuestion = {searchTerm}></QuestionList>
        </div>
    )
}

export default FindQuestion;
import React from "react";
import './index.css';
import './Homepage.css';

import Banner from './Banner';
import Heading from './Heading';
import Button from './Button';
import ArticleList from './ArticleList';
import TutorialList from './TutorialList';

function HomePage(){
    return(
        <div className="homepage">
            <Banner />
            <div className='heading'>
                <Heading title="Featured Articles"/>
            </div>
            <ArticleList />
            <div className='button'>
                <Button name="See all articles" />
            </div>
            <div className='heading2'>
                <Heading title="Featured Tutorials"/>
            </div>
            <TutorialList />
            <div className='button2'>
                <Button name="See all tutorials" />
            </div>
        </div>
    )
}

export default HomePage;
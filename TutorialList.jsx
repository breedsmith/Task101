import React from "react";
import Article from "./Article";
import featuredTutorials from "./featuredTutorial"

const ArticleComponent = (article, i) => {
    return (
        <Article
        key = {i}
        thumbnail={article.thumbnail}
        title={article.title}
        description={article.description}
        rating={article.rating}
        author={article.author}
        />
    )
}

const TutorialList = () => {
    return(
        <div className="articles2">
            {featuredTutorials.map(ArticleComponent)}
        </div>
    )
}

export default TutorialList;
import React from "react";
import Article from "./Article";
import featuredArticles from "./featuredArticle";

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

const ArticleList = () => {
    return(
        <div className="articles">
            {featuredArticles.map(ArticleComponent)}
        </div>
    )
}

export default ArticleList;
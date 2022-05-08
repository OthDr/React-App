import { useState } from "react";
const Article = ({article}) => {

    
    return (  
        <div className="article-preview" key={article.id}>
            <h3>Title:  {article.title} </h3>
            <img src={article.urlToImage}></img>
            <p>{article.description}</p>
            <h5>Author: {article.author.firstname +' '+article.author.lastname}</h5>
            <span> {article.publishedAt}</span>
        </div>
    );
}
export default Article;
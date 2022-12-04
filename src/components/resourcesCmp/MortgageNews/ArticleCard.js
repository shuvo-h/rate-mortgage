import React from 'react';

const ArticleCard = ({article}) => {
    return (
        <article>
            <div>
                image
            </div>
            <h4>{article.title}</h4>
            <div>
                <address>by {article.author}</address>
                on
                <time>{article.publish_date}</time>
            </div>
            <div>
                {
                    article.description.map((para,idx) =><p key={idx+Date.now()}>{para}</p>)
                }
            </div>
        </article>
    );
};

export default ArticleCard;
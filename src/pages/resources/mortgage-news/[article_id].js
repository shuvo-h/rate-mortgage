import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Layout from '../../../components/Layout/layout';

const ArticleDetails = (ctx) => {
    const {article_id} = ctx;
    console.log(article_id);
    const [article,setArticle] = useState();

    useEffect(()=>{
        if (article_id) {
            fetch(`https://mortgage-strapi.herokuapp.com/api/articles/${article_id}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                setArticle(data?.data)
            })
            
        }
    },[article_id])
console.log(article);

    if (!article?.id) {
        return <h1 className='text-center'><i>Loading..........</i></h1>
    }

    return (
        <Layout className='container'>
            <article>
                <h1>{article?.attributes?.title}</h1>
                <small>By Craig Wales on {new Date(article?.attributes?.createdAt).toLocaleDateString()} Tags: market update industry news</small>
                <div>

                </div>
                <div>Image</div>
                <div style={{whiteSpace:"pre-wrap"}}>
                    {
                        article?.attributes?.description?.split("/n")?.map((text,idx) => <p key={idx}>{text}</p>)
                    }
                </div>
            </article>
        </Layout>
    );
};

export default ArticleDetails;
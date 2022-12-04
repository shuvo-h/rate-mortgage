import React from 'react';
import ArticleCard from './ArticleCard';

const newsData = {
    title:"Mortgage News & Updates",
    info:[
        "Stay up to date on the latest mortgage news you to need to know. From pending home sales to market updates that affect mortgage rates, Guaranteed Rate is your source for the latest industry news."
    ],
    articleList: [
        {
            title:"Three out of four regions show pending home sales decline in October",
            image:"",
            author:" Craig Wales",
            publish_date:"11/30/2022",
            url:"",
            tags:["industry news", "market update"],
            description:[
                "Pending home sales were down 4.6% nationwide in October as homebuyers dealt with a two decade high in mortgage rates. According to the National Association of Realtors® (NAR), October is the 5th straight month that pending home sales have decreased."
            ],
        },
        {
            title:"Looking back on an unforeseeable year",
            image:"",
            author:" Craig Wales",
            publish_date:"11/30/2022",
            url:"",
            tags:["industry news", "market update"],
            description:[
                "Every year in December, we look back at what happened in the housing market over the past 12 months, and rate our ability to predict what would happen. We try to help you understand the trends that shape the mortgage and housing markets and offer a little informed opinion throughout the year. Some years we do better than others"
            ],
        },
    ]
}

const featuredArticles = [
    {
        title:"How to buy a house with no money down",
        image:"",
        author:"Briana Avant",
        publish_date:"1/21/2022",
        url:"",
        tags:["Featured Buying a Home", "loan options"],
        description:[
            "Buying a home shouldn’t be reserved for the wealthy. Everyone deserves the chance to own their own home if they choose. Buying a home is out of reach for many individuals due to the high cost of purchasing. That’s why mortgage lenders and the federal government have made homebuying more accessible. When purchasing a property, a certain formula is used:"
        ],
    },
    {
        title:"Buying a home in 2019: Here’s what you need to know.",
        image:"",
        author:"Jared Fernley",
        publish_date:"5/13/2019",
        url:"",
        tags:["buying a home", "Featured Buying a Home"],
        description:[
            "At any one moment, buying a home for the first time can be: challenging, vulnerable, thrilling, terrifying, life-changing, savvy, collaborative, complicated, fun, overwhelming and immensely rewarding. Yup, it’s all that and then some. Luckily, you don’t have to do it all on your own—or have to learn it all on your own. We break down the most important principles, tips, and info if you’re a first-time homebuyer in 2019."
        ],
    },
]


const MortgageNewsFeature = () => {

    return (
        <section>
            <h1>{newsData.title}</h1>
            <div>
                {
                    newsData.info.map((para,idx) => <p key={`idx_${idx}`}>{para}</p>)
                }
            </div>
            <div>
                <div>
                    {
                        newsData.articleList.map((article,idx) => <ArticleCard article={article} key={idx+"artlist"} />)
                    }
                </div>
                <div>
                    <h2>Featured</h2>
                    <div>
                        {
                            featuredArticles.map((article,idx) => <ArticleCard article={article} key={idx - Date.now()} />)
                        }
                </div>
                </div>
            </div>
        </section>
    );
};

export default MortgageNewsFeature;
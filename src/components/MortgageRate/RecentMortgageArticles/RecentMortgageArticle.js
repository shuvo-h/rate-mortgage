import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';


const RecentMortgageArticle = ({recentMortgageArticle}) => {
    return (
        <div className='col-12 col-lg-4 card'>
            
            <div className="">
            <div>
                {/* <StaticImage src={recentMortgageArticle.img} width={200} alt={recentMortgageArticle.title}></StaticImage> */}
                <StaticImage src={`../../../images/mortgage_rate/${recentMortgageArticle.img}`} width={200} alt={recentMortgageArticle.title}></StaticImage>
                
            </div>
            <h5 class="card-title p-3">{recentMortgageArticle.title}</h5>
            <div className="card-body">
                <p className="card-text">{recentMortgageArticle.short_para}</p>
            </div>
            </div>

        </div>
    );
};

export default RecentMortgageArticle;
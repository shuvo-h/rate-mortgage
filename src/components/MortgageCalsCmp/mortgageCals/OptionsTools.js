import { Link } from 'gatsby';
import React from 'react';


const OptionsAndPricingTools = {
    title:"Homebuying options and pricing tools",
    introduction:[],
    pricingTools:[
        {
            image:"",
            title:"Mortgage application",
            url:""
        },
        {
            image:"",
            title:"Today's rates",
            url:""
        },
        {
            image:"",
            title:"Loan options",
            url:""
        },
    ],
    conclusion:[
        "To get a better sense of the total costs of buying a home, use our home mortgage calculator and figure out what your future mortgage payments will be.* Our home loan calculator accounts for all the essential conditions that will affect mortgage costs including loan type, loan amount, down payment, interest rate and more. Note: The calculator only provides preliminary estimates based on information you enter, and such factors as current interest rates, credit score and a debt-to-income ratio (DTI) above 43% may yield different pricing results."
    ],
}


const OptionsTools = () => {
    return (
        <section>
            <h2>{OptionsAndPricingTools.title}</h2>
            <div>
                {
                    OptionsAndPricingTools.introduction.map((para,idx)=><p key={`paraTool_${idx}`}></p>)
                }
            </div>
            <div>
                {
                    OptionsAndPricingTools.pricingTools.map((tool,idx)=><div key={`paraToo_${idx}`}>
                        <div>Image</div>
                        <div>{tool.title}</div>      
                    </div>)
                }
            </div>
            <div>
                {
                    OptionsAndPricingTools.conclusion.map((para,idx)=><p key={`paraToolC_${idx}`}></p>)
                }
            </div>
        </section>
    );
};

export default OptionsTools;
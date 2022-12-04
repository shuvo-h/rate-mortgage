import { Link } from 'gatsby';
import React from 'react';

const OptionsTools = ({OptionsAndPricingTools}) => {
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
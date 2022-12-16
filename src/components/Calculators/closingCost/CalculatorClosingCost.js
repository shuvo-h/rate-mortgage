import React, { useState } from 'react';
import CalculatorNav from '../CalculatorNav';
import InputClosingCost from './InputClosingCost';

const closingNavList = ["inputs","results","help"];

const CalculatorClosingCost = () => {
    const [activeNav,setActiveNav] = useState(closingNavList[0]);

    return (
        <section style={{maxWidth:"fit-content",margin:"auto"}}>
            <CalculatorNav navList={closingNavList} activeNav={activeNav} setActiveNav={setActiveNav} />
            
            <div>
                {
                    activeNav === "inputs" && <InputClosingCost  />
                }
            </div>
        </section>
    );
};

export default CalculatorClosingCost;
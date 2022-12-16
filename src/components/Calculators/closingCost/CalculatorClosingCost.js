import React, { useState } from 'react';
import ButtonRegular from '../../common/ButtonRegular';
import CalculatorNav from '../CalculatorNav';
import HelpClosingCalc from './HelpClosingCalc';
import InputClosingCost from './InputClosingCost';
import CalcResults from './ResultsCalc';

const closingCalcHelp = [
    {
        text:"There comes a time in the life of most homeowners when a drop in prevailing interest rates coupled with the prospect of reducing monthly mortgage payments makes too much sense not to explore; hence, the lure and the logic of a home refinance.",
        urls:[
            {
                name:"",
                url:""
            }
        ]
    }
]

const closingNavList = ["inputs","results","help"];

const CalculatorClosingCost = () => {
    const [activeNav,setActiveNav] = useState(closingNavList[2]);

    return (
        <section style={{maxWidth:"fit-content",margin:"auto"}}>
            <CalculatorNav navList={closingNavList} activeNav={activeNav} setActiveNav={setActiveNav} />
            
            <div>
                {
                    activeNav === "inputs" && <InputClosingCost  />
                }
            </div>
            <div>
                {
                    activeNav === "results" && <CalcResults  />
                }
            </div>
            <div>
                {
                    activeNav === "help" && <HelpClosingCalc  />
                }
            </div>

            <div className='text-center'>
                <ButtonRegular className='border-0 text-white px-5 py-2 fs-5' label={"Apply now"} />
            </div>
        </section>
    );
};

export default CalculatorClosingCost;
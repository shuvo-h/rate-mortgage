import React, { useEffect, useState } from 'react';

const calculatorData = {
    title: "Mortgage calculator",
    info:"Get a sense of the costs of buying a home with our monthly mortgage calculator.",
    prices: {
    //     home: 300,
    //     downpay_1: 300,
    //     downpay_2: 400,
    //     interest_rate: 15,
        loan_term: ["10","20","30"]
    },
    disclosures: ["Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details.", "Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details. Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details. Start house hunting! An agent knows your market and works with you to find your dream home on your budget. When you find your perfect home, present the seller a purchase contract with all the details."]
}

const Calculator = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [homePrice,setHomePrice] = useState(500000);
    const [downPayPercent,setDownPayPercent] = useState(10);
    const [downPay,setDownPay] = useState(0);
    const [termInMonth,setTermInMonth] = useState(0);
    const [interestRate,setInterestRate] = useState(0);
    const [isMilitaryVeteran,setIsMilitaryVeteran] = useState(0);

    console.log({homePrice,downPay,downPayPercent,termInMonth,interestRate,isMilitaryVeteran});

    useEffect(()=>{
        const loanAmount = homePrice - ((homePrice * downPayPercent)/100);
        console.log(loanAmount);
    },[])

    
    return (
        <section style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"2rem"}} className="container">
            <div>
                <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>{calculatorData.title}</h2>
                <p style={{fontSize:"1.5rem", lineHeight:"2rem"}}>{calculatorData.info}</p>
                <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"2rem"}}>
                    <div className='calc_Input_wrapper'>
                        <p style={{margin:0}}>Home Price</p>
                        <div>
                            $
                            <input className='calc_input' onChange={e=>setHomePrice(parseFloat(e.target.value))} type="number" value={homePrice} />
                        </div>
                    </div>
                    <div className='calc_Input_wrapper'>
                        <p style={{margin:0}}>Down Payment %</p>
                        <div> %
                            <input className='calc_input' onChange={e=>setDownPayPercent(parseFloat(e.target.value))} type="number" value={downPayPercent} />
                        </div>
                    </div>
                    <div className='calc_Input_wrapper'>
                        <p style={{margin:0}}>Down Payment $</p>
                        <div>
                            $
                            <input className='calc_input' onChange={e=>setDownPay(parseFloat(e.target.value))} type="number" value={downPay} />
                        </div>
                    </div>
                    <div className='calc_Input_wrapper'>
                        <p style={{margin:0}}>Loan term</p>
                        <select  className='calc_input' style={{width:"100%",}} onChange={e=>setTermInMonth(parseFloat(e.target.value)*12)} name="" id="">
                            {
                                calculatorData.prices.loan_term.map(term => <option value={term} key={term}>{term}</option>)
                            }
                        </select>
                    </div>
                    <div className='calc_Input_wrapper'>
                        <p style={{margin:0}}>Interest rate</p>
                        <div>
                            %
                            <input className='calc_input' onChange={e=>setInterestRate(parseFloat(e.target.value))} type="number" value={interestRate} />

                        </div>
                    </div>
                    <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                        <input onChange={e=>setIsMilitaryVeteran(e.target.value)} type="checkbox" />
                        <p style={{margin:0}}>Military Veteran</p>
                    </div>
                    <div className='banner_buttons' style={{display:"block"}}>
                        <button>Apply now</button>
                    </div>
                </div>
                <div style={{cursor:"pointer",padding:"5px", margin:"10px auto",boxShadow: isOpen? "0 0 2px 1px":""}} onClick={()=>setIsOpen(!isOpen)}>
                    <p style={{color:"#6495ED", fontWeight:"600"}}>Legal Disclosures  (icon {isOpen ? "up" : "down"})</p>
                    {
                        isOpen && <div>
                        {
                            calculatorData.disclosures.map((para,idx) => <p key={idx}>{para}</p>)
                        }
                    </div>
                    }
                    
                </div>
            </div>
            <div>
                <h1>Graph Show</h1>
            </div>
        </section>
    );
};

export default Calculator;
import React, { useEffect, useState } from 'react';
import GrapgMortgage from './GrapgMortgage';
import "../../pages/Home/home.css";


const dataForGraph = [
    { name: 'Principal and Interest', value: 700 },
    { name: 'PMI', value: 300 },
    { name: 'Property taxes', value: 300 },
    { name: 'Insurance', value: 200 },
    { name: 'HOA fees', value: 50 },
  ];
  
  const COLORSForGraph = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',"#000"];
  
  

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
        <section className="base_container">
            <h2 className='fs-1 lh-2 mb-3'>{calculatorData.title}</h2>
            <div className='row gx-5'>
                <div className='col'>
                    <p className='fs-4 lh-1'>{calculatorData.info}</p>
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
                <div className='col p-4' style={{border:"1px solid skyblue", borderRadius:"8px"}}>
                    <div style={{textAlign:"center"}}>
                        <p>Your monthly payment would be</p>
                        <h2 style={{fontSize:"2.5rem", margin:0}}>$2500</h2>
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <div style={{ width:"250px", height:"300px"}}>
                            <GrapgMortgage graphData={dataForGraph} graphColors={COLORSForGraph}></GrapgMortgage>
                        </div>
                        <div>
                            <h5 style={{textAlign:"center"}}>Breakdown</h5>
                            <div style={{width:"fit-content"}}>
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:"2rem"}}>
                                    <p className='boolet_style m-2 ml-0' style={{"--colordynamic":COLORSForGraph[0 % COLORSForGraph.length]}}>Principal and interest</p>
                                    <h5 style={{margin:"8px"}}>$3654</h5>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:"2rem"}}>
                                    <p className='boolet_style m-2 ml-0'  style={{"--colordynamic":COLORSForGraph[1 % COLORSForGraph.length]}} >PMI</p>
                                    <h5 style={{margin: "8px"}}>$223</h5>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:"2rem"}}>
                                    <p className='boolet_style m-2 ml-0'  style={{"--colordynamic":COLORSForGraph[2 % COLORSForGraph.length]}} >Property taxes</p>
                                    <h5 style={{margin:"8px"}}>$17</h5>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:"2rem"}}>
                                    <p className='boolet_style m-2 ml-0'  style={{"--colordynamic":COLORSForGraph[3 % COLORSForGraph.length]}} >Insurance</p>
                                    <h5 style={{margin: "8px"}}>$45</h5>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",gap:"2rem"}}>
                                    <p className='boolet_style m-2 ml-0'  style={{"--colordynamic":COLORSForGraph[4 % COLORSForGraph.length]}} >HOA fees</p>
                                    <h5 style={{margin:"8px"}}>$0</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
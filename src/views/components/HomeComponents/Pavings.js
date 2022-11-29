import React from 'react';
import { NavLink } from 'react-router-dom';
import Paving from './Paving';

const pavingsData = [
    {icon:"icon", amount: 70, sign:"$", unit:"B", info:"Branches serving all 50 states",btn:"our story", url:"/"},
    {icon:"icon", amount: 96, sign:"", unit:"%", info:"Branches serving all 50 states",btn:"our story", url:"/"},
    {icon:"icon", amount: 70, sign:"$", unit:"B", info:"Branches serving all 50 states",btn:"our story", url:"/"},
]

const Pavings = () => {
    return (
        <section style={{borderBottom:"1px solid skyblue", padding:"3rem 0"}} className="container">
            <div>
                <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>Paving the way since Y2K</h2>
                <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", textAlign:"center"}}>
                    {
                        pavingsData.map((paving,idx) => <Paving paving={paving} idx={idx} key={paving.info}></Paving>)
                    }
                </div>
            </div>
            
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem", padding:"3rem"}}>
                <img style={{width:"150px"}} src={"/assets/images/satisfaction.png"} alt="satisfaction" />
                <div>
                    <p  style={{display:"inline", color:"grey"}}>100% satisfaction guaranteed, only from Guaranteed Rate. {" "}</p>
                    <NavLink style={{color:"grey"}} href="/">view details</NavLink>
                </div>
            </div>
            <p style={{fontSize:"14px"}}>*96% Customer Satisfaction: Data Source: Guaranteed Rate’s Client Satisfaction Surveys (Averaged 2021)</p>
        </section>
    );
};

export default Pavings;
import React from 'react';
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
            <div style={{display:"grid", gridTemplateColumns:"300px 1fr"}}>
                <div>
                    <img style={{width:"100%"}} src={"/assets/images/satisfaction.png"} alt="satisfaction" />
                </div>
                <div>
                    <p>100% satisfaction guaranteed, only from Guaranteed Rate.</p>
                    <a href="/">view details</a>
                </div>
            </div>
        </section>
    );
};

export default Pavings;
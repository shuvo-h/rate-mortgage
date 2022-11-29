import React from 'react';
import { NavLink } from 'react-router-dom';
import MortgageCard from './MortgageCard';

const mortgageData = {
    title: "Find a mortgage to fit your unique needs",
    viewBtn : "View all mortgage options",
    info:"Tell us about yourself.",
    mortgages: [
        {icon:"Flag Icon", title:"I am active service member"},
        {icon:"Flag Icon", title:"I am active service member"},
        {icon:"Flag Icon", title:"I am active service member"},
        {icon:"Flag Icon", title:"I am active service member"},
    ]
}



const Mortgage = () => {
    return (
        
        <section style={{marginTop:"2rem", marginBottom:"4rem"}} className="container">
            <div style={{display:"grid", gridTemplateColumns:"2fr 1fr", alignItems:"center"}}>
                <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>{mortgageData.title}</h2>
                <NavLink style={{ color:"#6495ED", fontSize:"20px",textAlign:"right",textDecoration:"none", fontWeight:600}} to='/'>{mortgageData.viewBtn}</NavLink>
            </div>
            <p style={{fontSize:"20px"}}>{mortgageData.info}</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)", gap:"2rem"}}>
                {
                    mortgageData.mortgages.map((mortgage,idx) =><MortgageCard mortgage={mortgage}  key={idx}></MortgageCard>)
                }
            </div>
        </section>
    );
};

export default Mortgage;
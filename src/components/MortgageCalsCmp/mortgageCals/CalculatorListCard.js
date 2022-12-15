import { Link } from 'gatsby';
import React from 'react';

const CalculatorListCard = ({title="",calculatorList=[]}) => {

    return (
        <section className='py-4 my-5'  style={{backgroundColor:"#eff4f5", borderRadius:"10px"}}>
            <h2 className='my-4 text-center'>{title}</h2>
            <div className={`m-auto`} style={{maxWidth:"600px"}}>
                <ul className='row list-unstyled'>
                    {
                        calculatorList.map(calculator=><li 
                            className='col-12 col-md-6 my-3' 
                            key={calculator.name}
                        >
                            <Link 
                                className='linkSt text-decoration-none fw-bold' 
                                style={{color:"#1885a9"}} 
                                to={calculator.url} 
                            >
                            {calculator.name}</Link>
                        </li>)
                    }        
                </ul>
            </div>
        </section>
    );
};

export default CalculatorListCard;
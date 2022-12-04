import React from 'react';
import Cachet from './Cachet';


const cachets = [
    {
        image:"",
        title:"Fast",
        description:"Our priority turn times mean you can become a power buyer overnight."
    },
    {
        image:"",
        title:"Strong",
        description:"Full-underwriting credit approval commands respect and helps you compete with cash buyers*."
    },
    {
        image:"",
        title:"Flexible",
        description:"Renewable and lasts for 90 days, giving you time to find the home right for you."
    },
]

const Cachets = () => {

    return (
        <section className='container'>
            <h1>The cachet to compete with cash</h1>
            <div>
                {
                    cachets.map(cachet =><Cachet  cachet={cachet} key={cachet.title} /> )
                }
            </div>
        </section>
    );
};

export default Cachets;
import React from 'react';

const toolInfo = {
    title: "Homebuying options and pricing tools",
    tools: [
        {
            icon: "",
            title:"Loan options",
            url:"/home-loans",
        },
        {
            icon: "",
            title:"Mortgage calculators",
            url:"/mortgage-calculators",
        },
        {
            icon: "",
            title:"Today's rates",
            url:"/mortgage-rates",
        },
    ]
}


const buyingAhouseInfo = {
    title:"We’re here to help you do this",
    paragraph: "We offer top-of-the-line technology and customer service that guides you through the homebuying process with ease whether it’s your first home or fifth home. Get in contact with Guaranteed Rate’s elite team of experts, ready to help you make the best decision for you.",
    button: "I'm ready to buy",
    options: [
        {
            title:"Pre-approval letter",
            text:"Stand out to agents and sellers as a serious buyer."
        },
        {
            title:"Digital Mortgage",
            text:"Our online application only takes about 10-15 minutes."
        },
        {
            title:"All types of loans",
            text:"Choose the best loan for your needs."
        },
        {
            title:"100% satisfaction guaranteed",
            text:"If you’re not completely satisfied, we’ll return your application fee. Period. View details"
        },
    ]
}


const ToolsOptionsPricing = () => {

    return (
        <section>
            <h1>{toolInfo.title}</h1>
            <div>
                {
                    toolInfo.tools.map(tool => <div key={tool.title}>
                        <div>
                            <div>{tool.icon}</div>
                        </div>
                        <div>
                            <h6>{tool.title}</h6>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <div>
                    <h3>{buyingAhouseInfo.title}</h3>
                    <p>{buyingAhouseInfo.paragraph}</p>
                    <button>{buyingAhouseInfo.button}</button>
                </div>
                <div>
                    <ul>
                        {
                            buyingAhouseInfo.options.map(option => <div>
                                <h3>{option.title}</h3>
                                <p>{option.text}</p>
                            </div>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ToolsOptionsPricing;
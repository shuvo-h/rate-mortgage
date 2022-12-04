import React from 'react';
import ProcessStep from './ProcessStep';

const processList = [
    {
        title: "Application and pre-approval letter",
        paragraphs:[
            "Before you start looking for homes, it’s smart to get a pre-approval letter from your lender. You want to set yourself up to be the strongest buyer possible—the person the seller absolutely wants to deal with. And it’s important to understand that to a seller, a lender’s pre-approval letter is considerably stronger than a pre-qualification letter. When a seller knows your financing is secure, your offer is taken more seriously.",
            "To get pre-approved, you fill out an application with information including your name, current income and assets to determine how much you can reasonably afford. You’ll be asked for your Social Security Number to run a credit check, and we’ll provide you a summary of the report. With our Digital Mortgage , this can all be done in about 10 to 15 minutes on your phone or computer, and if you ever get stuck, just call the number on the screen. If your completed application is approved, you can contact your loan officer to get a pre-approval letter that can be shared with your agent. In a strong seller’s market like the one we’re in now, a letter can mean the difference between having your offer accepted or rejected.",
            "Discover PowerBid Pre-Approval from Guaranteed Rate"
        ]
    },
    {
        title: "Find your dream home",
        paragraphs:[
            "Finding your perfect home is the most exciting part of the process. Connect with your real estate agent to start seeing amazing homes in your area. Real estate professionals are valuable partners in the process: they help you find the best home, put in an Offer to Purchase, negotiate the price and handle all the paperwork and details. When you find the right home and the seller accepts your offer, the home goes “under contract.”",
            "More about home shopping",
            
        ]
    },
    {
        title: "Inspection and appraisal",
        paragraphs:[
            "It is critical to make sure that the house you are buying is in good shape. Even if the home you plan to purchase looks flawless to you, there's no substitute for a trained professional conducting a home inspection of the property to make sure you understand the quality, safety and overall condition of your potential new home.",
            "An inspector will review the electrical, plumbing, roof, overall condition of the home and more to ensure that there aren’t any problems. Agents can usually recommend a trustworthy licensed home inspector, and the inspection is generally scheduled within a week of the contract being signed. We recommend that you attend the inspection to get a better understanding of the inner workings of the home.",
            "Guaranteed Rate will order an appraisal to confirm the value and condition of the home. We’ll work with your real estate agent, the seller’s agent and the appraiser to schedule the appraisal. You and your agent will receive copies of the appraisal report, so you can see the appraised fair market value and check out the comparable homes that were used in the calculations. The appraisal needs to be equal to or greater than your offer price. If all goes well, you’ll receive a mortgage approval.",
            "More about the appraisal",
        ]
    },
    {
        title: "Underwriting and final approval",
        paragraphs:[
            "Underwriting sounds wonky, but it’s basically just verifying all the information that has been gathered, including your income, employment and assets as well as the property details. Once everything looks good, the Underwriter will sign-off on all documents and issue a final approval. Then the mortgage team schedules your closing and reviews the Closing Disclosure (CD), which is a standard document that details the finalized terms for the loan, including a breakdown of all costs and fees.",
            "More about underwriting",
        ]
    },
    {
        title: "Closing and your new keys",
        paragraphs:[
            "Once your loan is fully approved, you’re ready to close your loan and get the keys to your new dream home. We’ll send you the closing package the day before your closing appointment. At closing, you’ll sign the remaining mortgage documents and pay your down payment and closing costs . Some lenders are moving this process online, making it faster and more convenient than visiting an office to sign papers. With our simple and innovative FlashClose process, closing appointments could only take about 30 minutes.",
            "Congratulations, your dream home is all yours! Now, it’s time to move in and get to know your new neighbors!",
            "More about closing"
        ]
    },
]

const Process = () => {
    return (
        <section>
            <h1>Process</h1>
            {
                processList.map((process,idx)=><ProcessStep process={process} />  )
            }
        </section>
    );
};

export default Process;
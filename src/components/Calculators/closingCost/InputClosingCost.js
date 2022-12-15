import React from 'react';
import {calc_input} from "../calculators.module.css";

const windoOpener = (url) => {
    if (url) {
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=300");
    }
}


const fields = [
    {
        title:"Purchase price",
        name:"purchase_rate",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:"https://partners.leadfusion.com/tools/guaranteedrate/gloss.fcs?param=pGB*sHdbpn0NonRAs2V5sGV8t2V8tmk2qnd*jWV_pDF1r1NlkCpxtXhCqmYBfjoId2UFcypxtXhCqmYCfmp2p2p2pw@@"
    },
    {
        title:"Loan amount",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Term (years)",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Interest rate",
        name:"",
        type: 'number',
        sign:"%",
        value: 25000,
        info_url:""
    },
    {
        title:"Adjusted Origination Charges:",
        type:"para_title",
        info_url:""
    },
    {
        title:"Origination Charge",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Charge For Specific Interest Rate",
        name:"",
        type: 'number',
        sign:"%",
        value: 25000,
        info_url:""
    },
    {
        title:"Other Settlement Services",
        type:"para_title",
        info_url:""
    },
    {
        title:"Required services selected by lender:",
        type:"para_title",
        info_url:""
    },
    {
        title:"Appraisal",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Credit report",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Flood Certification",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Tax Service",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Title services and lender's title insurance",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Owner's title insurance",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Government recording charges",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Transfer taxes",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Required Services You Can Shop For:",
        type:"para_title",
        info_url:""
    },
    {
        title:"Survey",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Pest Inspection",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Yearly property tax",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    {
        title:"Yearly property insurance",
        name:"",
        type: 'number',
        sign:"$",
        value: 25000,
        info_url:""
    },
    
]

const ElementRenderer = (elementInfo) =>{
    switch (elementInfo.type) {
        case "value":
            
            break;
    
        default:
            return <input className={calc_input} style={{width:"120px", padding:0}} type={elementInfo.type} name={elementInfo.name} defaultValue={elementInfo.value} />
    }
}

const SubmitBtn = () => <div>
    <button>Submit <span></span></button>
</div>

const InputClosingCost = () => {
    return (
        <form className='my-3' style={{color:"rgb(51,51,51)"}}>
            {
                fields.map(field =><div className='d-flex justify-content-between'  style={{fontSize:"12px",}}>
                    {
                        field.type === "para_title"
                        ? <h6 style={{margin: "15px 0 4px 0"}}>{field.title}</h6>
                        : <>
                            <label htmlFor="" 
                                style={{
                                    color: field.info_url ? "blue" : "rgb(51,51,51)",
                                    textDecoration: field.info_url ? "underline" : "none",
                                    cursor: field.info_url ? "pointer" : "auto",
                                }} 
                                onClick={()=>windoOpener(field.info_url)}
                            >
                                {field.title}
                            </label>
                            <span>
                                {field.sign === "$" ? field.sign :  ""}
                                {
                                    ElementRenderer(field)
                                }
                                {field.sign === "%" ? field.sign : <span>&nbsp;&nbsp;&nbsp;</span>}
                            </span>
                        </>
                    }
                </div>)
            }
            <SubmitBtn />
        </form>
    );
};

export default InputClosingCost;
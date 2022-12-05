/**
 * 
 * @param {"string"} text 
 * @param {[{name:"",url:""}]} url_List 
 * @returns 
 */

import React from "react";

// insert hyperlink to a portion of text
export const makeHyperLink = (text='',url_List=[{name:"",url:""}]) =>{
    let tempTextList = [text];
    
    url_List.map(urlInfo =>{
        const new_tempTextList = [];
        // check each string type element from cplg if it has the url text included
        tempTextList.forEach(el=>{
        if (typeof el === 'string') {
            // check if the string include the url text 
            if (el.includes(urlInfo.name)) {
            // const splitedPortions = el.split(/(_nexUr_)/g);
            const regex = new RegExp(`(${urlInfo.name})`,'g');
            const splitedPortions = el.split(regex);
            
            splitedPortions.forEach(portion =>{
                if (portion === urlInfo.name) {
                // const createdLink = <a href={urlInfo.url}>{urlInfo.name}</a>
                const createdLink = React.createElement("a",{href:urlInfo.url},urlInfo.name);
                new_tempTextList.push(createdLink);
                }else{
                new_tempTextList.push(portion);
                }
            })
            }else{
            new_tempTextList.push(el);
            }
        }else{
            // keep the anchor node in stack
            new_tempTextList.push(el);
        }
        })
        tempTextList = [...new_tempTextList];
    })

    // make a <p> from the stack
  const paraElement = React.createElement("p",{},[...tempTextList]);
  
  return paraElement;
}


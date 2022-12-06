/**
 * 
 * @param {"string"} text 
 * @param {[{name:"",url:""}]} url_List 
 * @returns 
 */

import React from "react";

// insert hyperlink to a portion of text
export const makeHyperLink = (text='',url_List=[{name:"",url:""}],elementKey=Math.random()) =>{
    let tempTextList = [text];
    
    url_List.map(urlInfo =>{
        const new_tempTextList = [];
        // check each string type element from cplg if it has the url text included
        tempTextList.forEach(el=>{
        if (typeof el === 'string') {
            // check if the string include the url text 
            if (urlInfo.name?.length && el.includes(urlInfo.name)) {
                const regex = new RegExp(`(${urlInfo.name})`,'g');
                const splitedPortions = el.split(regex);
                // console.log(splitedPortions,el,urlInfo.name);
                
                splitedPortions.forEach(portion =>{
                    if (portion === urlInfo.name) {
                    // const createdLink = <a href={urlInfo.url}>{urlInfo.name}</a>
                    const createdLink = React.createElement("a",{href:urlInfo.url,key:urlInfo.name},urlInfo.name);
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
  const paraElement = React.createElement("p",{key:elementKey.toString()},[...tempTextList]);
  
  return paraElement;
}


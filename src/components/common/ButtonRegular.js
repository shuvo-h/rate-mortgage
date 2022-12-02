import React from 'react';
import {btn_common} from "./common.module.css";

const ButtonRegular = ({label,style={}, className=""}) => {
    return (
        <button className={`${btn_common} bg-danger rounded  ${className}`} style={{...style}}>{label}</button>
    );
};

export default ButtonRegular;
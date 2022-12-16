import React, {useState} from "react";

import {accordion_title, border_bott, border_top} from "./index.module.css"

const CustomAccordion = ({title, content, accordionIndex}) => {
  const [showAccordion, setShowAccordion] = useState(false)

  const handleToggle = () => {
    setShowAccordion(!showAccordion)
  }

  return (
    <div className={accordionIndex === 0 ? border_top : border_bott}>
      <h6 onClick={handleToggle} className={accordion_title}>{title}</h6>

      {
        showAccordion &&       
        <div>
          {content}
        </div>
      }
    </div>
  )
}

export default CustomAccordion;
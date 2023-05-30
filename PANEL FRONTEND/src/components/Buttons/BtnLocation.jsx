import React from 'react'
import "../../sass/buttons.scss"
import {  HiMapPin, HiChevronDown } from "react-icons/hi2"

const BtnLocation = () => {
  return (
    <>
        <button type="button" className="btn-location">
          <span>
            <HiMapPin></HiMapPin>         
                    Localidad
            <HiChevronDown></HiChevronDown>
          </span>
     </button>
    
    </>
  )
}

export default BtnLocation
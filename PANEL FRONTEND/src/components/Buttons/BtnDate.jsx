import React from 'react'

import "../../sass/buttons.scss"
import {  HiChevronDown, HiCalendar } from "react-icons/hi2"



const BtnDate = () => {

//NEEDS CALENDAR FUNCTION

    return (
    <>
    <button type="button" className="btn-location">
    <span>
      <HiCalendar></HiCalendar> 
      23/05/2023        

      <HiChevronDown > </HiChevronDown>
    </span>
</button>
    </>
  )
}

export default BtnDate
import React from 'react'
import "../../sass/buttons.scss"
import {  HiClock, HiChevronDown,} from "react-icons/hi2"


const BtnTime = () => {

//needs dropdown

    return (
    <>
    <button type="button" className="btn-time">
    <span>
      <HiClock></HiClock>         
              20:30
      <HiChevronDown></HiChevronDown>
   
    </span>
</button>
    </>
  )
}

export default BtnTime
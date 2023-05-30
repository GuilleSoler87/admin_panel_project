import React from 'react'
import "../../sass/buttons.scss"
import {HiOutlinePlusSmall} from "react-icons/hi2"

const BtnAddActivity = (props) => {
  return (
    <>
    
    <button type="button" className="btn-add-activity" onClick={props.handleClick}><span>
        <HiOutlinePlusSmall></HiOutlinePlusSmall>
        Añadir actividad</span></button>
    </>
  )
}

export default BtnAddActivity
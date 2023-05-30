import React from 'react'
import "../../sass/buttons.scss"
import { HiClock } from "react-icons/hi2"

const ProgramNotification = (props) => {
  return (
    <>
     <button type="button" className="btn-green-lg1" onClick={props.onClick}><span><HiClock></HiClock>Programar</span></button>
    </>
  )
}

export default ProgramNotification
import React from 'react'
import "../../sass/buttons.scss"
import { HiClock} from "react-icons/hi2"

const BtnProgram = () => {
  return (
    <>
    <button type="button" className="btn-green-lg"><span><HiClock></HiClock>Programar</span></button>
    </>
  )
}

export default BtnProgram
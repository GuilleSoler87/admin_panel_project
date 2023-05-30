import React from 'react'
import "../../sass/buttons.scss"
import { HiEnvelope} from "react-icons/hi2"

const BtnSendNow = (props) => {
  return (
    <>
     <button type="button" className="btn-green-lg1" onClick={props.onClick}><span><HiEnvelope></HiEnvelope>Enviar ahora</span></button>
    </>
  )
}

export default BtnSendNow
import React from 'react'
import "../../sass/buttons.scss"
import {HiDocumentCheck} from "react-icons/hi2"


const BtnSave = (props) => {
  return (
    <>
      <button type="button" className="btn-green-md" onClick={props.onClick}><span>
        <HiDocumentCheck></HiDocumentCheck>
        Guardar</span></button>
    </>
  )
}

export default BtnSave
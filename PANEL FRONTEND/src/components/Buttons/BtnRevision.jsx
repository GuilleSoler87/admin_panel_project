import React from 'react'
import "../../sass/buttons.scss"
import { HiClipboardDocumentList} from "react-icons/hi2"


const BtnRevision = (props) => {
  return (
    <>
        <button type="button" className="btn-green-lg" onClick={props.onClick}>    <span className="iconText">
          <HiClipboardDocumentList></HiClipboardDocumentList>
        Enviar a revisión</span>
        </button>
    </>
  )
}

export default BtnRevision
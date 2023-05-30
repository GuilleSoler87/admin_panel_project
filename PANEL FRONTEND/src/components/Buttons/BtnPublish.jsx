
import React from 'react'
import "../../sass/buttons.scss"
import { HiClipboardDocumentCheck} from "react-icons/hi2"


const BtnPublish = () => {
  return (
    <>
       <button type="button" className="btn-green-lg gray" disabled>    <span><HiClipboardDocumentCheck></HiClipboardDocumentCheck>Publicar</span></button>
    </>
    
  )
}

export default BtnPublish
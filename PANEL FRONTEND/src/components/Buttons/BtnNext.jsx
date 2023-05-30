import React from 'react'
import "../../sass/buttons.scss"
import { HiChevronRight} from "react-icons/hi2"


const BtnNext = (props) => {
  return (
    <><button type="button" className="btn-gray-md" onClick={props.onClick}><span>Siguiente<HiChevronRight></HiChevronRight></span></button></>
  )
}

export default BtnNext
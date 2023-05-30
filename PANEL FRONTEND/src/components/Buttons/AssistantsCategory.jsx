import React from 'react'
import "../../sass/buttons.scss"
import { HiChevronDown } from "react-icons/hi2"


const AssCategory = () => {

//needs dropdown

    return (
    <>
    <button type="button" className="btn-AssCategory">
    <span>
                         Todos
      <HiChevronDown></HiChevronDown>
   
    </span>
</button>
    </>
  )
}

export default AssCategory
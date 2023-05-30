import React from 'react'
import "../../sass/buttons.scss"
import { HiMapPin, HiChevronDown} from "react-icons/hi2"

import React from 'react'

const BtnProvince = () => {
  return (
    <>
   <button type="button" className="btn-location">
    <span>
      <HiMapPin></HiMapPin>         
              Provincia
      <HiChevronDown></HiChevronDown>
   
    </span>
</button>
    </>
  )
}

export default BtnProvince
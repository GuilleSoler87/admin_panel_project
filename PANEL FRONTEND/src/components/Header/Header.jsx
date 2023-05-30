import { Link } from 'react-router-dom';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { BsPersonFill } from 'react-icons/bs';
import Hands from "../../assets/hands.png"

import'./Header.scss'
import { useState } from 'react';

// import logoImage from '../../assets/Hands.png'




const Header = () => {

const [text, setText]= useState("");
const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter"){
    }
}  ;

  return (

   <>
    <div className="header-container">
      <div className="logo">

         <Link to="/"> <h1 className="header-title">Feevents</h1></Link>
         <div className='img-h'><img src={Hands} alt="Logo" /></div>

      </div>
      <div className='input-container'>

        <input onKeyUp={handleChange} 
        placeholder=" Buscar..."
         name="text"/>
      </div>
      <nav>
        <ul className="navigation">
          <li>
            <Link to="/acerca" className='acerca'>
            <div className="icon-container" style={{ marginTop: '6px' }}>
            <HiOutlineClipboardDocumentList size={33} />
            </div>
            </Link>
          </li>
          <li>
            <Link to="/contacto" className='contacto'>
            <div className="circle-profile">
              <BsPersonFill />

                </div>
    </Link>
          </li>
        </ul>
      </nav>
   </div>

   </>
  );
};

export default Header;
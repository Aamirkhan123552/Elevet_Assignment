import {useState} from 'react';

import { HiOutlineUpload } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CgMenuRound  } from 'react-icons/cg';
import { AiOutlineCloseCircle } from 'react-icons/ai';




const Header = () => {
  
  const [active, setActive] = useState(false)
  return (
    <div className="Header">
      <img src="../logo.png" className="logo_image"/>
      <h1 className="logo">Jobspot</h1>
      <nav className={active ? "mb_menu" :"menu1"}>
      
        <ul  className='mb_menu'>
           
          <li>Find Jobs</li>
          <li>Career Resources </li><RiArrowDropDownLine className="dw_icon"/>
          <li>Company Profile </li>
          <li>About </li>
         
        </ul>
        
      </nav>
      <button className="up_button">Upload Resume <HiOutlineUpload  className="icon"/> </button>
      {active ? <AiOutlineCloseCircle className='menu' onClick={() => setActive(false)} /> : <CgMenuRound className='clmenu' onClick={() => setActive(true)} /> }
    </div>
  );
};

export default Header;

import React, { useState } from 'react'; 
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';
import { SidebarData } from './SidebarData';

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                {/* <AiIcons.AiOutlineClose /> */}
              </Link>
              <IoIcons.IoIosContact size={40} className="left-icon" />
              <h1 class='side-heading'>Admin</h1>
              <h1><button class='side-down'>Logout <IoIcons.IoIosExit /></button></h1>
            </li>
            {SidebarData.map((item, index) => {
              return (
                
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon} 
                    <a href={item.url}>{ item.title}</a>
                    
                  </Link>
                </li>

            
        
        );
              })}; 
            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
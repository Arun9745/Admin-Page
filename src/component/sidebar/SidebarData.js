import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
 
 
  {
    title: 'Dashboard',
    path: '/Dashboard',
    url:'/',
    icon: <IoIcons.IoIosToday />,
    cName: 'nav-text'
  },
  {
      
  
     
      elementt: '/Search',
      cName: 'nav-text',
      url:'/Search',
      title: 'Surveys',
      path: '/Survey', 
      icon: <IoIcons.IoIosPaper />,
    },
  
  {
    title: 'Reports',
    path: '/Report',
    icon: <IoIcons.IoIosDocument />,
    url:'/',
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoIosPerson />,
    url:'/',
    cName: 'nav-text'
  },
  
];
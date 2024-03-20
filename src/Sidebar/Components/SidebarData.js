import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
 
 
  {
    title: 'Dashboard',
    path: '/',
    icon: <IoIcons.IoIosToday />,
    cName: 'nav-text'
  },
  {
    title: 'Surveys',
    path: '/survey',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosDocument />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoIosPerson />,
    cName: 'nav-text'
  },
  
];
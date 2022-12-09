import React from 'react'
import * as ImIcons from 'react-icons/im';
import * as AiIcons from 'react-icons/ai';
import * as IconName  from 'react-icons/ri';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        classname: 'nav-text'
    },
    {
        title: 'React Facts',
        path: '/facts',
        icon: <ImIcons.ImBooks />,
        classname: 'nav-text'
    },
    {
        title: 'AirBnB',
        path: '/airbnb',
        icon: <IconName.RiHomeWifiLine />,
        classname: 'nav-text'
    },
]
import React from 'react'
import * as ImIcons from 'react-icons/im';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


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
]
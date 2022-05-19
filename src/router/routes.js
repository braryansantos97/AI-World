import React from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import ContactMe from '../pages/ContactMe';
import Chat from '../pages/Chat';

const routes = [
    {
        Element: Home,
        key: 'Home',
        path: '/'
    },
    {
        Element: Chat,
        key: 'Chat',
        path: '/chatai'
    },
    {
        Element: About,
        key: 'About',
        path: '/about'
    },
    {
        Element: ContactMe,
        key: 'ContactMe',
        path: '/contactme'
    }
];

export default routes;



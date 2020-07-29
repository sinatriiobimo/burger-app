import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import clases from './Toolbar.css';

const toolbar = (props) => (
    <header className={clases.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;

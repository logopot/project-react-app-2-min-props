import React from 'react';
import './Header.css';
import logo from '../../img/logo.svg';

import {Search} from '../Search/Search';

const Header = (props) => {
    return (
        <header className = {`header ${props.className}`}>
            <div className = "wrapper">
                <img className = "logo" src = {logo} alt = "logo" />
                <Search />
            </div>
        </header>
    )
}

export {Header};
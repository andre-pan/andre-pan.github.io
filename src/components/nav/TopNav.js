import React from 'react';
import NavItem from './NavItem';
import './Nav.css';
import logo from '../../assets/AP.png';

function TopNav(){
    return(
        <nav className="top-nav">
            {/* <div>
                <img src={logo}/>
            </div> */}
            <NavItem exact name="Home" styleName="margin-left-auto" to="/home"/>
            {/* <NavItem name="tests" to="/"/> */}
            <NavItem name="Experience" to="/experience"/>
            <NavItem name="About me" to="/about"/>
        </nav>
    )
}

export default TopNav
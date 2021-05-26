import React from 'react';
import NavItem from './NavItem';

function TopNav(){
    return(
        <div class="top-nav">
            <NavItem name="home" to="/"/>
            {/* <NavItem name="tests" to="/"/> */}
            <NavItem name="experience" to="/experience"/>
            <NavItem name="about me" to="/about"/>
        </div>
    )
}

export default TopNav
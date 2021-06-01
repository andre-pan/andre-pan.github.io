import React from 'react';
import {NavLink} from 'react-router-dom';

function NavItem(props){
    return(
        <NavLink className={"nav-item " + (props.styleName ? props.styleName : "")} to={props.to}>
           <p>{props.name}</p>
        </NavLink>
    )
}

export default NavItem
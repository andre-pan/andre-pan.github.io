import React from 'react';

function FooterItem(props){
    return(
        <span className={"footer-item" + (props.styleName ? props.styleName : "")} to={props.url}>
            <a href={props.url} noreferrer="true" target="blank">
            
            {props.icon} {props.text}
           </a>
        </span>
    )
}

export default FooterItem
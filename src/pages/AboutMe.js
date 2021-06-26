import React from 'react'
import ProfileImgSrc from '../assets/ProfileImg.png';

function AboutMePage(){
    return (
        <div className="flex-center">
            <img src={ProfileImgSrc} className="responsive-img profile-img"/>
        </div>
    );
}

export default AboutMePage;
import React from 'react'
import ProfileImgSrc from '../assets/ProfileImg.png';

function AboutMePage(){
    return (
        <div className="flex-center flex-column">
            <img src={ProfileImgSrc} className="responsive-img profile-img"/>
            <div>
                <p className="text-center">
                    Software developer passionate about new technologies. Experience with fullstack web development.
                    <br/>
                    In my free time I enjoy scrolling through the latest tech articles, cooking new recipes, table tennis, and playing the occasional game of League of Legends.                                                                  
                </p>
            </div>
        </div>
    );
}

export default AboutMePage;
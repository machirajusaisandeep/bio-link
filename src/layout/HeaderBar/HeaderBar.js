import React from 'react';

import * as classes from './HeaderBar.css';
import socialIcons  from '../../model/social.model';
const HeaderBar=(props)=>{
    return (
        <div className={classes.HeaderBar}>
             <h1>Welcome To Bio</h1>
             <div className={classes.SocialIcon}>
                    {
                        socialIcons.map((icon,index)=>{
                            return (
                                <div key={index}>
                                   { icon.icon}
                                {/* <span>{icon.name}</span> */}
                                </div>
                            )
                        })
                    }
             </div>
             
             </div>
    )
}

export default HeaderBar;

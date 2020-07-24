import React, { useState } from 'react';

import * as classes from './HeaderBar.css';
import socialIcons  from '../../model/social.model';
import ProfileCard from '../../Card/ProfileCard/ProfileCard';
import Backdrop from '../Backdrop/Backdrop';
const HeaderBar=(props)=>{
    const [toggleProfile,setToggleProfile]=useState(false);
    
    return (
        <div className={classes.HeaderBar}>
             <h1> Bio</h1> 
             <img onClick={()=>setToggleProfile(!toggleProfile)} className={classes.ProfileImg}  src="https://mir-s3-cdn-cf.behance.net/user/115/02ee4a412289827.5e5f3ff376ca9.jpg" />
            {
                toggleProfile?<ProfileCard closeProfileCard={()=>setToggleProfile(!toggleProfile)}></ProfileCard>:null
            }
            {
                toggleProfile?<Backdrop clickListen={()=>setToggleProfile(!toggleProfile)}></Backdrop>:null
            }
             <div className={classes.SocialIcon}>
                    {
                        socialIcons.map((icon,index)=>{
                            return (
                                <a className={classes.IconLink} href={icon.url} target="blank" key={index}>
                                   { icon.icon}
                                </a>
                            )
                        })
                    }
             </div>
             
             </div>
    )
}

export default HeaderBar;

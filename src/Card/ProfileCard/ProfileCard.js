import React from 'react';
import * as classes from './ProfileCard.css'

const ProfileCard=(props)=>{
    return (
        <div className={classes.ProfileCard}>
                <p className={classes.Close} onClick={()=>props.closeProfileCard()}><i class="fa fa-times" aria-hidden="true"></i></p>
                <ul>
                    <li><p>Sai Sandeep Machiraju</p></li>
                    <li><i className={classes.Tag}>UI Developer</i><i className={classes.Tag}>UX Designer</i> <i className={classes.Tag}>Photographer</i> </li>
                    <li><p> Phone <i class="fa fa-phone" aria-hidden="true"></i> </p> <span>9493683642</span></li>
                    <li><p>Mail <i class="fa fa-envelope" aria-hidden="true"></i> </p><span>machirajusaisandeep@outlook.com</span></li>
                    <li><p>Role <i class="fa fa-laptop" aria-hidden="true"></i> </p><span>UX/UI Developer</span></li>
                    <li><p>Office <i class="fa fa-building-o" aria-hidden="true"></i> </p><span>Eunimart</span></li>
                </ul>
             
             </div>
    )
}

export default ProfileCard;

import React from 'react';
import * as classes from './Backdrop.css'

const Backdrop=(props)=>{
    return (
        <div className={classes.Backdrop} onClick={()=>props.clickListen()}>
             
         </div>
    )
}

export default Backdrop;

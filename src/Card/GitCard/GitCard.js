import React from 'react';

import * as classes from './GitCard.css';

import funcs from '../../module/function';

const GitCard=(props)=>{
    const date=new Date(props.created_date);
    return (
        <div className={classes.GitCard}>
           <a href={props.clone} target="blank">
           <span  className={classes.Clone +" "+'material-icons'}>
            content_copy
            </span>
           </a>
           <h1 className={classes.CardTitle}>{props.name}</h1>
            <span className={classes.Date}>{funcs.DateFormatter(date.toString())}</span>
            <div className={classes.Language}>
                {
                    props.language.map((lang,index)=>{
                        return <span key={props.id + index} className={classes.Lang}> <div className={classes.Indicator } style={{backgroundColor:funcs.LanguageClass(lang) }}></div> {lang} </span>
                    })
                }
            </div>
        </div>
    )
}

export default GitCard;

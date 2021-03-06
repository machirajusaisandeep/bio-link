import React from 'react';

import * as classes from './BlogCard.css';
import funcs from '../../module/function';

const BlogCard=(props)=>{
    return (
        <div className={classes.BlogCard}>
            <div className={classes.CardBody}>
                 <h5 className={classes.CardTitle}>{props.title}</h5>
                 <p className={classes.CardContent}>{props.content}</p>
            </div>
            <div className={classes.CardFooter}>
                <div className={classes.FooterSec1}>
                <span className={classes.Name}>{props.category}</span>
                <small className={classes.SmallText}>{props.date}</small>
                </div>
                {
                    props.showBookmark !== "no" ? <div><button className={classes.BookmarkBtn} onClick={()=>{funcs.createBookmark({title:props.title,url:props.bookmark});props.onBookmark();}}>< span className = "material-icons" >
                    bookmark_border </span> Bookmark
            </button> </div>:(<div className={classes.Button}><span className={classes.Bookmarked}>Bookmarked</span>
            <button  onClick={()=>props.onDelete()}  ><i className="fa fa-trash-o" aria-hidden="true"></i>
</button> </div>)
                }
               
            </div>
        </div>
    )
}

export default BlogCard;

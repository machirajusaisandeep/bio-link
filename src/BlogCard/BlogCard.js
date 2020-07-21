import React from 'react';

import * as classes from './BlogCard.css'

const BlogCard=()=>{
    return (
        <div className={classes.BlogCard}>
            <div className={classes.CardBody}>
                <h5 className={classes.CardTitle}>Had denoting properly jointure which well books beyond</h5>
                <p className={classes.CardContent}>In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...</p>
            </div>
            <div className={classes.CardFooter}>
                <div>
                <span class="card-post__author-name">John James</span>
                <small class="text-muted">29 February 2019</small>
                </div>
                <div>
                <button className={classes.BookmarkBtn}>< span className = "material-icons" >
                        bookmark_border </span> Bookmark
                </button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;
{/* < span className = "material-icons" >
bookmark_border </span> */}
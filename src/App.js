import React,{useState,useEffect} from 'react';
import * as classes from './App.css';
import BlogCard from './Card/BlogCard/BlogCard';
import GitCard from './Card/GitCard/GitCard';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import firebase from "./module/firebase"
import nobookmark from "./assets/bookmark.svg";
function App() {

  const [gitRepos,setGitRepos]=useState([]);
  const [recent,setRecent]=useState([]);
  const [bookmark,setBookmark]=useState([]);
  const [bookmarkShimmer,setBookmarkShimmer]=useState(
    <SkeletonTheme color="#E8E8E8" highlightColor="#ffffff"><Skeleton  count={10} width= "50rem"
  height='12rem' /> </SkeletonTheme>
  );
  useEffect(()=>{
    if(localStorage.getItem('bookmark'))
    setBookmark( [...JSON.parse(localStorage.getItem('bookmark'))]);
    const database=firebase.database();
    database.ref('git').on('value',(snapshot)=>{
      let value=snapshot.val();
      setGitRepos(value);
    })
    database.ref('recent').on('value',(snapshot)=>{
      let value=snapshot.val();
      setRecent(value);
    })
  },[])
  
  const checkBookmark=()=>{
    console.log('bookmark called')
    setBookmark( [...JSON.parse(localStorage.getItem('bookmark'))])
  }
  setTimeout(()=>{
  setBookmarkShimmer( <div className={classes.TextCenter}>
    <img src={nobookmark} alt="No Bookmarks"/>
    <p>No Bookmarks yet !, Add Some</p>
  </div>)
  },1000)

  return (
    <div className={classes.App}>
      <h1>Welcome To Bio</h1>
      
   <div className={classes.Section1}>
   <h1>Recent</h1>
    <div className={classes.Cards}>
    {
      recent.length>0? recent.map((item,index)=>{
        return <BlogCard key={index} {...item} onBookmark={()=>checkBookmark()}></BlogCard>
       }):<SkeletonTheme color="#E8E8E8" highlightColor="#ffffff"><Skeleton  count={10} width= "50rem"
       height='12rem' /> </SkeletonTheme>
     }
    </div>
    <h1>Bookmarks</h1>
    <div className={classes.Cards}>
    {
        bookmark.length>0? recent.map((item,index)=>{
          return <BlogCard key={index} {...item} showBookmark='no'></BlogCard>
         }):bookmarkShimmer
     }
    </div>
   </div>
    <div className={classes.Section2}>
    <h1>Git Repos</h1>
    <div className={classes.GitCards}>
    {
       gitRepos.length>0?  gitRepos.map((item,index)=>{
        return <GitCard key={index} {...item}></GitCard>
       })
       :<SkeletonTheme color="#E8E8E8" highlightColor="#ffffff"><Skeleton  count={10} width= "30rem"
       height='12rem' /> </SkeletonTheme>
     
     }
    </div>
    </div>
    <div className={classes.Footer}>
     <p> Made With React Js</p>
    </div>
    </div>
  );
}

export default App;

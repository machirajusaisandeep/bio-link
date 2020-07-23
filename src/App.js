import React,{useState,useEffect} from 'react';
import * as classes from './App.css';
import BlogCard from './Card/BlogCard/BlogCard';
import GitCard from './Card/GitCard/GitCard';
import Skeleton from 'react-loading-skeleton';
import firebase from "./module/firebase"

function App() {

  const [gitRepos,setGitRepos]=useState([]);
  const [recent,setRecent]=useState([]);
  const [bookmark,setBookmark]=useState([]);
  
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

  return (
    <div className={classes.App}>
      <h1>Welcome To Bio</h1>
   <div className={classes.Section1}>
   <h1>Recent</h1>
    <div className={classes.Cards}>
    {
      recent.length>0? recent.map((item,index)=>{
        return <BlogCard key={index} {...item} onBookmark={()=>checkBookmark()}></BlogCard>
       }):<Skeleton count={10} width= "20rem"
       height='12rem'
   /> 
     }
    </div>
    <h1>Bookmarks</h1>
    <div className={classes.Cards}>
    {
        bookmark.length>0? recent.map((item,index)=>{
          return <BlogCard key={index} {...item} showBookmark='no'></BlogCard>
         }):<p className={classes.TextCenter}>Not Bookmarked yet!</p>
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
       :<Skeleton count={10} width= "30rem"
       height='12rem' /> 
     
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

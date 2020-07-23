import React,{useState,useEffect} from 'react';
import axios from 'axios';
import * as classes from './App.css';
import BlogCard from './Card/BlogCard/BlogCard';
import GitCard from './Card/GitCard/GitCard';
import Skeleton from 'react-loading-skeleton';

import recent from "./model/recent.model";
import gitRepo from "./model/git.model";

function App() {
 
  return (
    <div className={classes.App}>
      <h1>Welcome To Bio</h1>
   <div className={classes.Section1}>
   <h1>Recent</h1>
    <div className={classes.Cards}>
    {
       recent.map((item,index)=>{
        return <BlogCard key={index} {...item}></BlogCard>
       }) 
     }
    </div>
   </div>
    <div className={classes.Section2}>
    <h1>Git Repos</h1>
    <div className={classes.GitCards}>
    {
       gitRepo.map((item,index)=>{
        return <GitCard key={index} {...item}></GitCard>
       })
     }
    </div>
    </div>
    </div>
  );
}

export default App;

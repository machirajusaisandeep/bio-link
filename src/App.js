import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import BlogCard from './Card/BlogCard/BlogCard';
import recent from "./model/recent.model";
function App() {
  // const [git,setGit]=useState([]);
  // useEffect(()=>{
  //   axios.get(`https://api.github.com/users/machirajusaisandeep/repos`)
  //     .then(res => {
  //      for(let repo of res.data){
  //       let repoObj={
  //         name:repo.name,
  //         clone:repo.clone_url,
  //         created_date:repo.created_at,
  //         id:repo.id,
  //       }
  //       axios.get(repo.languages_url)
  //       .then(lang=>{
  //         repoObj['language']=Object.keys(lang.data);
  //         setGit([...git,repoObj],(repo)=>{
  //           console.log(repo,"repoo")
  //         });
  //       }
  //       );
  //      }
       
  //     }

  //     )



  // },[])
  return (
    <div className="App">
     {
       recent.map((item,index)=>{
        return <BlogCard key={index} {...item}></BlogCard>
       })
     }
    </div>
  );
}

export default App;

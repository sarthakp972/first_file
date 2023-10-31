"use client"

import { useEffect, useState,useRef } from "react"
    export default function Home(){
     
 let [user,setUser] =useState([])
// chat gpt
const videoRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
const blue =()=>{
console.log(user)
}

const togglePlay = () => {
  if (videoRef.current.paused) {
    videoRef.current.play();
    console.log("play")
    setIsPlaying(true);
  } else {
    videoRef.current.pause();
    console.log("pause")
    setIsPlaying(false);
  }
};
// chat gtp end
 // console.log("patwa ji")
      useEffect(()=>{
        async function fetchUsers(){
          const data=await fetch("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json")

         
          
            
           setUser(await data.json());
           //console.log()

           
         }
        fetchUsers();
      },[]);

    return (
      <div>
      <video ref={videoRef} controls style={{  backgroundColor:"red", width:"350px",height:"600px"}} > 
        <source src=" http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"/* {user&&user[1]&&user[1].videoUrl}*/  type="video/mp4" />
        {console.log("your-url",user&&user[1]&&user[1].videoUrl)}

       
        Your browser does not support the video tag.
      </video>
    
   
    
      <button onClick={togglePlay}>
      
        {isPlaying ? 'Pause' : 'Play'}

      </button>
      <br/>
      <button onClick={blue}>change video</button>
    </div>
    )
  

}


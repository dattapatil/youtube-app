import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContent = () =>{
  
    const [videoList, setVideoList] = useState([]);

    useEffect(() =>{
        getVieos();
    }, [])
    
    const getVieos = async ()=>{
        const apiCall = await fetch(YOUTUBE_VIDEO_API);
        
        const json = await apiCall.json();
         setVideoList(json.items)
      //console.log(json.items)
    }
   
    
    return(
        <div className="flex flex-wrap">
            {
                videoList.map((item)=>{

                    return (
                        <Link to={"/watchvideo?v="+ item.id} key={item.id} > 
                            <VideoCard info={item} />
                        </Link>
                    )
                })
            }
            
        </div>
    )
}

export default VideoContent;
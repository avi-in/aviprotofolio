import React from "react";
import Backgroundvideo from "./Video/Backgroundvideo.mp4";


const Back = () => {
 
  

  return (
    <div>
      <video autoPlay loop muted id="video">
        <source src={Backgroundvideo} type='video/mp4'/>
      </video>

    </div>
  );

  }
export default Back;

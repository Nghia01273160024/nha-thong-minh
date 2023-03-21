import './homeStyle.css'
import React, { useState } from 'react';
import { WiDaySunny, WiRain } from "react-icons/wi";
const HomeAuto = ({ onToggle }) => {
    const [isRain, setIsRain] = useState(false);

    const handleToggle = () => {
    const newState = !isRain;
    setIsRain(newState);
    onToggle(newState); 
  }
    return(
        <div className={`switch-container ${isRain ? "rain" : "sunny"}`}>
        <label className="switch">
          <input type="checkbox" checked={isRain} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
       <div>
        <a>hihi</a>
        <a>haha</a>
       </div>
      </div>
    )
} 

export default HomeAuto;
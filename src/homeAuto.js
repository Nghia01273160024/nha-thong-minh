import './homeStyle.css'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
const HomeAuto = ({ onToggle }) => {
    const [isRain, setIsRain] = useState(false);

    const handleToggle = () => {
    setIsRain(!isRain);
    onToggle(!isRain); 
  }
    return(
        <div className={`switch-container ${isRain ? "rain" : "sunny"}`}>
        <label className="switch">
          <input type="checkbox" checked={isRain} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
        <label className="switch">
          <input type="checkbox" checked={isRain} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
          <Box
           className='home-icon'
    
    >
      <SvgIcon sx={{ fontSize: 100}}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
    </Box>
      </div>
      
    )
} 

export default HomeAuto;
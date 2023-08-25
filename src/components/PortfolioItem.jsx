import React, { useState } from 'react';
import "../styles/PortfolioItem.css";

function PortfolioItem({ imageUrl, description }) {
   
    const [isHovered, setIsHovered] = useState(false);
      
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
      
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="image-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={imageUrl} alt="Image" className="image" />
            {isHovered && <div className="description">{description}</div>}
        </div>
    );
}

export default PortfolioItem;
import React, { useState } from 'react';
import "../styles/PortfolioItem.css";

function PortfolioItem({ imageUrl, title, tag }) {
   
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
            <img src={imageUrl} alt={title} className="image" />
            {isHovered && 
                <div className="description">
                    <div className='title'> {title} </div>
                    <div className='tag'> {tag} </div>
                </div>
            }
        </div>
    );
}

export default PortfolioItem;
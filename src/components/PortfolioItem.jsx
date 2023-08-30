import React, { useState } from 'react';
import {Image, Box} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
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
        <Box
            alignItems="center"
            alignSelf="center"
            className="image-container"
            w="100%"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/details/${title}`}>
                <Image
                    key={imageUrl}
                    w="100%"
                    objectFit="cover"
                    d="inline-block"
                    src={imageUrl}
                    alt={title}
                />
                {isHovered && 
                    <div className="description">
                        <div className='title'> {title} </div>
                        <div className='tag'> {tag} </div>
                    </div>
                }
            </Link>
        </Box>
    );
}

export default PortfolioItem;
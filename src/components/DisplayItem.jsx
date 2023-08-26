import React, { useState, useEffect } from 'react';
import '../styles/DisplayItem.css';

function DisplayItem({ imageUrl, buttonText, popupText }) {

  const [isZoomed, setIsZoomed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  useEffect(() => {
    // Start the zoom-in animation after a short delay
    const zoomTimeout = setTimeout(() => {
      setIsZoomed(true);
    }, 500);

    return () => clearTimeout(zoomTimeout);
  }, [isZoomed]);

  return (
    <div 
      className={`zooming-image-container ${isZoomed ? 'zoomed' : ''}`}
      onMouseEnter={handleMouseEnter}
    >
      <img src={imageUrl} alt={buttonText} className='image-display' id={isHovered ? "darken" : "normal"}/>
      {isHovered &&
        <div className="popup">
         <p className="popup-text">{popupText}</p>
         <button className="popup-button">{buttonText}</button>
        </div>
      }
      
    </div>
  );
}

export default DisplayItem;
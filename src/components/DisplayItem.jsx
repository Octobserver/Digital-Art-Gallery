import React, { useState, useEffect } from 'react';
import '../styles/DisplayItem.css';

function DisplayItem({ imageUrl, buttonText, popupText }) {

  const [isZoomed, setIsZoomed] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Start the zoom-in animation after a short delay
    const zoomTimeout = setTimeout(() => {
      setIsZoomed(true);
    }, 500);

    // Show the popup after the image zooms in
    if (isZoomed) {
      const popupTimeout = setTimeout(() => {
        setIsPopupVisible(true);
      }, 500);

      return () => clearTimeout(popupTimeout);
    }

    return () => clearTimeout(zoomTimeout);
  }, [isZoomed]);

  return (
    <div className={`zooming-image-container ${isZoomed ? 'zoomed' : ''}`}>
      <img src={imageUrl} alt={buttonText} className="image" />
      {isPopupVisible && (
        <div className="popup">
          <p className="popup-text">{popupText}</p>
          <button className="popup-button">{buttonText}</button>
        </div>
      )}
    </div>
  );
}

export default DisplayItem;
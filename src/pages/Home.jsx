import React from 'react';
import DisplayItem from '../components/DisplayItem';
import summer from '../assets/summer.jpg';

function Home() {
  return (
    <div className='home'>
      <div className='display'>
        <DisplayItem imageUrl={summer} buttonText='About Me' popupText="Hi! This is Octavia!"/>
      </div>
    </div>
  );
}

export default Home;
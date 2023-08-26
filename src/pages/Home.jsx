import React from 'react';
import DisplayItem from '../components/DisplayItem';
import banner1 from '../assets/banner1.jpg';

function Home() {
  return (
    <div className='home'>
      <div className='display'>
        <DisplayItem imageUrl={banner1} buttonText='ABOUT ME' popupText="Hi! This is Octavia!"/>
      </div>
    </div>
  );
}

export default Home;
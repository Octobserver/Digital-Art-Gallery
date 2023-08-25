import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import summer from '../assets/summer.jpg';

function MyWork() {
  return (
    <div className="projects">
      <h1> Portfolio</h1>
      <div className="artWorkList">
        <PortfolioItem imageUrl={summer} title="The Watery Summer" tag="Still Life"/>
      </div>
    </div>
  );
}

export default MyWork;
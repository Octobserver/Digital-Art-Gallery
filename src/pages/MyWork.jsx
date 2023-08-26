import React from 'react';
import {  Box  } from "@chakra-ui/react";
import PortfolioItem from '../components/PortfolioItem';
import {PortfolioItemList} from '../helper/PortfolioItemList';
import '../styles/MyWork.css';

function MyWork() {
  return (
    <div className="my-work-wrapper">
      <h1> Portfolio</h1>
      <Box
        padding={4}
        w="100%"
        maxW="1000px"
        mx="auto"
        bg="gray.800"
        sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      >
        {PortfolioItemList.map((item, idx) => {
          return (
            <PortfolioItem id={idx} imageUrl={item.imageUrl} title={item.title} tag={item.tag}/>
          );
        })}
      </Box>
    </div>
  );
}

export default MyWork;
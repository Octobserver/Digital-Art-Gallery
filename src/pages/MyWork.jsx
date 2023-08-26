import React from 'react';
import { Box, ChakraProvider} from "@chakra-ui/react";
import PortfolioItem from '../components/PortfolioItem';
import {PortfolioItemList} from '../helper/PortfolioItemList';

function MyWork() {
  return (
    <ChakraProvider>
      <Box 
        paddingBottom={20}
        paddingTop={20}
        fontSize="4xl" 
        alignSelf="center"
        alignItems="center"
        w="100%"
        maxW="1200px"
        color="#323944"
      >

        “I never lost sight of what I wanted, which was basically to do the best work I was capable of doing and to spend my life making things.”
          
      </Box>
      <Box
        padding={4}
        alignItems="center"
        alignSelf="center"
        w="100%"
        maxW="1200px"
        mx="auto"
        sx={{ columnCount: [1, 2, 3], columnGap: "16px" }}
      >
        {PortfolioItemList.map((item, idx) => {
          return (
            <PortfolioItem id={idx} imageUrl={item.imageUrl} title={item.title} tag={item.tag}/>
          );
        })}
      </Box>
    </ChakraProvider>
  );
}

export default MyWork;
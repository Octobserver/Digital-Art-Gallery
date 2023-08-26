import React, { useState } from 'react';
import character_art from '../assets/character-art.jpg';
import { Box, Flex, Image, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";



function PortfolioItemDetails() {
    const [isImageZoomed, setIsImageZoomed] = useState(false);

    const handleImageZoom = () => {
        setIsImageZoomed(true);
    };

    return (
        <Flex p={8} alignItems="center">
            <Box flex="1">
                <Image
                src={character_art}
                alt="Prophet"
                maxW={isImageZoomed ? '100%' : '300px'}
                transition="max-width 0.5s"
                onMouseEnter={handleImageZoom}
                />
            </Box>
            <Box flex="2" pl={8}>
                <VStack align="start" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">Title</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula augue ut consectetur.</Text>
                <HStack spacing={4}>
                    <IconButton icon={<FacebookIcon />} aria-label="Facebook" />
                    <IconButton icon={<TwitterIcon />} aria-label="Twitter" />
                    <IconButton icon={<InstagramIcon />} aria-label="Instagram" />
                </HStack>
                </VStack>
            </Box>
        </Flex>
    );
}

export default PortfolioItemDetails;
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { PortfolioItemList } from '../helper/PortfolioItemList';



function PortfolioItemDetails() {
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    const { title } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const i = PortfolioItemList.find(x => x.title === title);
        setItem(i);
      }, [title]);

    const handleZoomIn = () => {
        setIsImageZoomed(true);
    };

    const handleZoomOut = () => {
        setIsImageZoomed(false);
    };

    return (
        <HStack
            p={16} 
            w="100%" 
            maxW="1200px"
            spacing='16px'
            alignSelf={'center'}
        >
            <Box 
                zIndex={1}
                alignSelf={'center'}
                alignItems={'center'}
            >
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    maxW={isImageZoomed ? '600px' : '300px'}
                    transition="max-width 0.2s"
                    align={'center'}
                    onMouseEnter={handleZoomIn}
                    onMouseLeave={handleZoomOut}
                />
            </Box>
            <Box 
                pl={8}
                align={'center'}
            >
                <VStack align={'center'} spacing={4}>
                <Text fontSize="xl" fontWeight="bold">{item.title}</Text>
                <Text>{item.description}</Text>
                <HStack spacing={4}>
                    <IconButton icon={<FacebookIcon />} aria-label="Facebook" />
                    <IconButton icon={<TwitterIcon />} aria-label="Twitter" />
                    <IconButton icon={<InstagramIcon />} aria-label="Instagram" />
                </HStack>
                </VStack>
            </Box>
        </HStack>
    );
}

export default PortfolioItemDetails;
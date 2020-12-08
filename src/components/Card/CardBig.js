import React from 'react';
import {
  Box, Heading, Text, Flex
} from '@chakra-ui/core';
import { BookmarkBtn, LikedBtn, ArrowLeftBtn, ArrowRightBtn } from '../../assets';

const CardBig = (props) => {
  const {
    title, description, image, bookmarksCount, likesCount, gridColumn,
  } = props;
  
  return (
    <Box
      overflow="hidden"
      minHeight="300px"
      position="relative"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center center"
      color="white"
      borderRadius="30px"
      gridColumn={gridColumn}
      boxShadow="0px 8px 20px 0px rgba(127, 127, 127, 0.15)"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="full"
        height="full"
        zIndex="1"
      />
      <Box
        zIndex="10"
        paddingX="106px"
        paddingY="48px"
        width="full"
        height="full"
        position="absolute"
        top="0"
        left="0"
      >
        <Flex 
          justifyContent="space-between"
        >
          
          <Heading
            as="h3"
            fontWeight="800"
            fontSize={60}
            lineHeight="normal"
          >
            { title }
          </Heading>
          <Box
            whiteSpace="nowrap"
            fontFamily="'Montserrat', sans-serif"
            marginTop="5"
          >
            <Flex
              display="inline-flex"
              marginRight="3"
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Text
                as="span"
                marginBottom="2px"
              >
                <BookmarkBtn />
              </Text>
              <Text
                as="span"
                fontSize={12}
                fontWeight="500"
                letterSpacing="normal"
              >
                { bookmarksCount }
              </Text>
            </Flex>
            <Flex
              display="inline-flex"
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Text
                as="span"
                marginBottom="2px"
              >
                <LikedBtn />
              </Text>
              <Text
                as="span"
                fontSize={12}
                fontWeight="500"
                letterSpacing="normal"
              >
                { likesCount }
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Text
          fontFamily="'Montserrat', sans-serif"
          fontSize={20}
          fontWeight="600"
          letterSpacing="1px"
          marginBottom="4"
        >
          NOW TRENDING
        </Text>
        <Text
          fontWeight="bold"
          fontSize={15}
          lineHeight="1.6"
        >
          {
            description.split('\n').map((line) => (
              <Text as="span" key={line}>
                {line}
                <br />
              </Text>
            ))
          }
        </Text>
              
        <Flex
          position="absolute"
          top="0"
          left="0"
          justifyContent="space-between"
          alignItems="center"
          width="full"
          height="full"
          zIndex="-1"
          paddingX="32px"
        >
  
          <ArrowLeftBtn cursor="pointer" />
          <ArrowRightBtn cursor="pointer" />
        </Flex>
      </Box>
    </Box>
  )
}

CardBig.defaultProps = {
  title: '',
  description: '',
  image: '',
  bookmarksCount: 0,
  likesCount: 0,
};

export default CardBig;
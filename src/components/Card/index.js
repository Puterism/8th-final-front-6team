import React from 'react';
import {
  Box, Heading, Text, Flex
} from '@chakra-ui/core';
import dummyImageUrl from '../../images/dummy_big_card.png';
import { BookmarkBtn, LikedBtn, ArrowLeftBtn, ArrowRightBtn } from '../../assets';

const Card = (props) => {
  const {
    title, description, likesCount, commentsCount, big,
  } = props;

  return (
    <>
      {
        big ? (
          <Box
            overflow="hidden"
            minHeight="300px"
            position="relative"
            backgroundImage={`url(${dummyImageUrl})`}
            backgroundSize="cover"
            backgroundPosition="center center"
            gridColumn="1 / 4"
            color="white"
            borderRadius="30px"
          >
            <Box
              backgroundColor="rgba(39, 107, 66, 0.56)"
              opacity="0.6"
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
              <Heading
                as="h3"
                fontWeight="800"
                fontSize={60}
                lineHeight="normal"
              >
                { title }
              </Heading>
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
                { description.split('\n').map((line) => (
                  <Text as="span" key={line}>
                    {line}
                    <br />
                  </Text>
                )) }
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
              <Box
                display="inline-block"
                position="absolute"
                top="0"
                right="0"
                marginRight="27"
                marginTop="17"
                fontFamily="'Montserrat', sans-serif"
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
                    { likesCount }
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
                    { commentsCount }
                  </Text>
                </Flex>
                
              </Box>
              
            </Box>
          </Box>
        ) : (
          <Box overflow="hidden" color="#323232" borderRadius="30px">
            <Box height="331px" background="url(https://dummyimage.com/390x331/276b42/fff) center" />
            <Box
              bgColor="white"
              padding="30px"
              minHeight="141px"
              position="relative"
              borderBottomRadius="30px"
            >
              <Heading
                as="h3"
                fontWeight="bold"
                fontSize={22}
                lineHeight="normal"
                marginBottom="1"
              >
                { title }
              </Heading>
              <Text
                fontSize={12}
                fontWeight="normal"
                lineHeight="1.67"
              >
                { description }
              </Text>
            </Box>
          </Box>
        )
      }
    </>
  );
};

Card.defaultProps = {
  title: '',
  description: '',
  likesCount: 0,
  commentsCount: 0,
  big: null,
};

export default Card;

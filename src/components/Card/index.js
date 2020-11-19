import React from 'react';
import {
  Box, Heading, Text, Button,
} from '@chakra-ui/core';
import dummyImageUrl from '../../images/dummy_big_card.png';

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
            height="full"
            position="relative"
            backgroundImage={`url(${dummyImageUrl})`}
            backgroundSize="cover"
            backgroundPosition="center center"
            gridColumnEnd="span 3"
            color="white"
          >
            <Box
              backgroundColor="main.500"
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
              paddingX="16"
              paddingY="17"
              width="full"
              height="full"
              position="absolute"
              top="0"
              left="0"
            >
              <Heading
                as="h3"
                fontWeight="800"
                fontSize="53px"
                lineHeight="1.21"
                marginBottom="4"
              >
                { title }
              </Heading>
              <Text
                width="500px"
                fontSize="md"
                lineHeight="1.5"
              >
                { description.split('\n').map((line) => (
                  <Text as="span" key={line}>
                    {line}
                    <br />
                  </Text>
                )) }
              </Text>
              <Box
                display="inline-block"
                position="absolute"
                bottom="16"
              >
                <Box display="inline-block" marginRight="7">
                  <Text as="span" marginRight="2">
                    좋
                  </Text>
                  <Text
                    as="span"
                    fontSize="sm"
                    fontWeight="bold"
                    letterSpacing="normal"
                  >
                    { likesCount }
                  </Text>
                </Box>
                <Box display="inline-block" marginRight="7">
                  <Text as="span" marginRight="2">
                    댓
                  </Text>
                  <Text
                    as="span"
                    fontSize="sm"
                    fontWeight="bold"
                    letterSpacing="normal"
                  >
                    { commentsCount }
                  </Text>
                </Box>
              </Box>
              <Button color="white" variant="link" position="absolute" top="0" right="0" marginRight="16" marginTop="17">
                SHARE
              </Button>
            </Box>
          </Box>
        ) : (
          <Box overflow="hidden" gridColumnEnd="span 1" color="main.500">
            <Box height="200px" background="url(https://dummyimage.com/340x200/2699fb/fff) center" />
            <Box
              bgColor="white"
              padding="30px"
              position="relative"
            >
              <Heading
                as="h3"
                fontWeight="bold"
                fontSize="xl"
                lineHeight="1.5"
                marginBottom="6"
              >
                { title }
              </Heading>
              <Text
                fontSize="sm"
                fontWeight="normal"
                lineHeight="1.71"
                marginBottom="9"
              >
                { description }
              </Text>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="inline-block">
                  <Box display="inline-block" marginRight="7">
                    <Text as="span" marginRight="2">
                      좋
                    </Text>
                    <Text
                      as="span"
                      fontSize="sm"
                      fontWeight="bold"
                      letterSpacing="normal"
                      color="main.500"
                    >
                      { likesCount }
                    </Text>
                  </Box>
                  <Box display="inline-block" marginRight="7">
                    <Text as="span" marginRight="2">
                      댓
                    </Text>
                    <Text
                      as="span"
                      fontSize="sm"
                      fontWeight="bold"
                      letterSpacing="normal"
                      color="main.500"
                    >
                      { commentsCount }
                    </Text>
                  </Box>
                </Box>
                <Button color="main.500" variant="link">
                  SHARE
                </Button>
              </Box>
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

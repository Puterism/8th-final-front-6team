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
          <Box overflow="hidden" height="100%" position="relative" background={`url(${dummyImageUrl}) center`} gridColumnEnd="span 3" color="#ffffff">
            <Box backgroundColor="#2699fb" opacity="0.6" position="absolute" top="0" left="0" width="100%" height="100%" zIndex="1" />
            <Box
              zIndex="10"
              margin="63px 69px"
              position="absolute"
              top="0"
              left="0"
            >
              <Heading
                as="h3"
                fontWeight="800"
                fontSize="53px"
              >
                { title }
              </Heading>
            </Box>
          </Box>
        ) : (
          <Box overflow="hidden" gridColumnEnd="span 1" color="#2699fb">
            <Box height="200px" background="url(https://dummyimage.com/340x200/2699fb/fff) center" />
            <Box
              bgColor="#ffffff"
              padding="30px"
              position="relative"
            >
              <Heading
                as="h3"
                fontWeight="bold"
                fontSize={20}
                lineHeight="1.5"
                marginBottom="24px"
              >
                { title }
              </Heading>
              <Text
                fontSize="14px"
                fontWeight="normal"
                lineHeight="1.71"
                marginBottom="37px"
              >
                { description }
              </Text>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="inline-block">
                  <Box display="inline-block" marginRight="28px">
                    <Text as="span" marginRight="10px">
                      좋
                    </Text>
                    <Text
                      as="span"
                      fontSize="14px"
                      fontWeight="bold"
                      letterSpacing="normal"
                      color="#2699fb"
                    >
                      { likesCount }
                    </Text>
                  </Box>
                  <Box display="inline-block" marginRight="28px">
                    <Text as="span" marginRight="10px">
                      댓
                    </Text>
                    <Text
                      as="span"
                      fontSize="14px"
                      fontWeight="bold"
                      letterSpacing="normal"
                      color="#2699fb"
                    >
                      { commentsCount }
                    </Text>
                  </Box>
                </Box>
                <Button color="#2699fb" variant="link" textAlign="right">
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

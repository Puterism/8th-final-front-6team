import React from 'react';
import {
  Box, Heading, Text, Flex, Image, Grid
} from '@chakra-ui/core';
import theme from '../../themes';
import { BookmarkBlackBtn, LikedBlackBtn } from '../../assets';

const CardMedium = (props) => {
  const { title, description, image, bookmarksCount, likesCount, merchandiseList, gridColumn } = props;

  return (
    <Box
      overflow="hidden"
      color="#323232"
      borderRadius="30px"
      gridColumn={gridColumn}
      boxShadow="0px 8px 20px 0px rgba(127, 127, 127, 0.15)"
    >
      <Box
        height="300px" 
        backgroundImage={`url(${image})`}
        backgroundSize="cover"
        backgroundPosition="center center"
      />
      <Box
        bgColor="white"
        padding="30px"
        minHeight="141px"
        position="relative"
        borderBottomRadius="30px"
      >
        <Flex
          justifyContent="space-between"
        >
          <Heading
            as="h3"
            fontWeight="bold"
            fontSize={22}
            lineHeight="normal"
          >
            { title }
          </Heading>
          <Box
            whiteSpace="nowrap"
            fontFamily="'Montserrat', sans-serif"
            marginTop="1"
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
                <BookmarkBlackBtn />
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
                <LikedBlackBtn />
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
          fontSize={12}
          fontWeight="normal"
          lineHeight="1.5"
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
      </Box>
      {
        merchandiseList.length > 0 && (
          <Grid
            templateColumns="repeat(3, 1fr)"
            marginX="6"
            marginBottom="12"
            gap="25px"
          >
            {
              merchandiseList.map((item, index) => {
                return (
                  <Box key={index}>
                    <Flex
                      alignItems="center"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        borderRadius="8px"
                        marginRight="10px"
                      />
                      <Box>
                        <Heading
                          as="h5"
                          fontSize={12}
                          margin="0"
                          marginBottom="1px"
                          lineHeight="normal"
                        >
                          {item.title}
                        </Heading>
                        <Text
                          fontSize={10}
                          color="#aaaaaa"
                          lineHeight="normal"
                        >
                          { item.store }
                        </Text>
                        <Text
                          fontSize={12}
                          color={theme.colors.green}
                          lineHeight="normal"
                        >
                          최저가 {item.price}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                )
              })
            }
          </Grid>
        )
      }
    </Box>
  )
}

CardMedium.defaultProps = {
  title: '',
  description: '',
  image: '',
  bookmarksCount: 0,
  likesCount: 0,
  merchandiseList: [],
};

export default CardMedium;
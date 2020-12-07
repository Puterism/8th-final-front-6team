import React from 'react';
import {
  Box, Heading, Text, Flex, Image, Grid
} from '@chakra-ui/core';
import theme from '../../themes';
import { BookmarkBlackBtn, LikedBlackBtn } from '../../assets';

const CardLarge = (props) => {
  const { title, subtitle, description, image, bookmarksCount, likesCount, merchandiseList, gridRow, gridColumn } = props;

  return (
    <Box
      overflow="hidden"
      color="#323232"
      borderRadius="30px"
      gridRow={gridRow}
      gridColumn={gridColumn}
      boxShadow="0px 8px 20px 0px rgba(127, 127, 127, 0.15)"
    >
      <Box
        height="548px"
        backgroundImage={`url(${image})`}
        backgroundSize="cover"
        backgroundPosition="center center"
      />
      <Box
        bgColor="white"
        paddingTop="9"
        paddingBottom="7"
        marginX="11"
        position="relative"
        borderBottom="2px solid #dadada"
      >
        <Flex
          justifyContent="space-between"
        >
          <Box>
            <Heading
              as="h3"
              fontWeight="bold"
              fontSize={32}
              lineHeight="normal"
            >
              { title }
            </Heading>
            <Heading
              as="h4"
              fontWeight="bold"
              fontSize={20}
              lineHeight="normal"
              marginBottom="4"
            >
              { subtitle }
            </Heading>
          </Box>
          <Box
            whiteSpace="nowrap"
            fontFamily="'Montserrat', sans-serif"
            marginTop="2"
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
      <Grid
        templateColumns="repeat(2, 1fr)"
        margin="10"
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
                      marginBottom="5px"
                      lineHeight="normal"
                    >
                      {item.title}
                    </Heading>
                    <Text
                      fontSize={10}
                      color="#aaaaaa"
                      marginBottom="9px"
                      lineHeight="normal"
                    >
                      {
                        item.description.split('\n').map((line) => (
                          <Text as="span" key={line}>
                            {line}
                            <br />
                          </Text>
                        ))
                      }
                    </Text>
                    <Text
                      fontSize={14}
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
    </Box>
  )
}

CardLarge.defaultProps = {
  title: '',
  description: '',
  image: '',
  bookmarksCount: 0,
  likesCount: 0,
  merchandiseList: [],
};

export default CardLarge;
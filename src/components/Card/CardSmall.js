import React from 'react'
import {
  Box, Heading, Text
} from '@chakra-ui/core';

const CardSmall = (props) => {
  const {
    title, description, image, gridColumn
  } = props;
  
  return (
    <Box
      overflow="hidden"
      color="#323232"
      borderRadius="30px"
      gridColumn={gridColumn}
      boxShadow="0px 8px 20px 0px rgba(127, 127, 127, 0.15)"
    >
      <Box
        height="331px" 
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
    </Box>
  )
}

CardSmall.defaultProps = {
  title: '',
  description: '',
  image: ''
};

export default CardSmall;
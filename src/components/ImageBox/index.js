import { Box, Flex, Image, Text } from '@chakra-ui/core';
import React from 'react';

export default ({
  isSelected, name,
  price,
  weight,
  num,
}) => (
  <Box
    opacity="1"
    minWidth="192px"
    maxWidth="192px"
    height="192px"
    borderRadius={isSelected ? '11px' : '5px'}
    border={isSelected ? 'solid 6px #1995ff' : 'solid 1px #ffffff'}
    marginRight="30px"
    bg={isSelected ? 'white' : '#2699fb'}
    color={isSelected ? '#289afb' : 'white'}
  >
    <Image width="192px" height="125px" borderTopRadius="5px" src="https://t1.daumcdn.net/cfile/tistory/99C9D4445BBEC6BF08" />
    <Flex padding="10px" flexDirection="column">
      <Text fontSize="12px">
        {name}
        {' / '}
        {weight}
        {' '}
        {num}
      </Text>
      <Text fontSize="15px" fontWeight="900">
        {price}
        원
      </Text>
    </Flex>
  </Box>
);

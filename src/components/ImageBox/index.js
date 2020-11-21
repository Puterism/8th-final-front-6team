import React from 'react';
import {
  Box, Flex, Image, Text,
} from '@chakra-ui/core';
import theme from '../../themes';

export default ({
  isSelected, name,
  price,
  weight,
  num,
}) => (
  <Box
    opacity="1"
    minW="192px"
    maxW="192px"
    h="192px"
    borderRadius={isSelected ? '11px' : '5px'}
    border={isSelected ? 'solid 6px #1995ff' : 'solid 1px #ffffff'}
    mr="30px"
    bg={isSelected ? 'white' : theme.colors.main[500]}
    color={isSelected ? '#289afb' : 'white'}
  >
    <Image w="192px" h="125px" borderTopRadius="5px" src="https://t1.daumcdn.net/cfile/tistory/99C9D4445BBEC6BF08" />
    <Flex p="10px" flexDir="column">
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

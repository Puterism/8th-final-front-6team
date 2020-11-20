import React from 'react';
import {
  Flex, VStack, Text, Box,
} from '@chakra-ui/core';
import ImageBox from '../ImageBox';

const list = [
  {
    name: '양파', price: '3,000', weight: '100g', num: '3개', isSelected: true,
  }, {
    name: '브로콜리', price: '3,000', weight: '100g', num: '3개',
  }, {
    name: '고구마', price: '3,000', weight: '100g', num: '3개',
  }, {
    name: '양상추', price: '3,000', weight: '100g', num: '3개',
  }, {
    name: '잠온다', price: '3,000', weight: '100g', num: '3개',
  }, {
    name: '일하기시러', price: '3,000', weight: '100g', num: '3개',
  }, {
    name: '노는게', price: '3,000', weight: '100g', num: '3개',
  }, {
    name: '제일조아', price: '3,000', weight: '100g', num: '3개',
  },
];

export default () => (
  <>
    <Flex paddingY="34px" bottom="0" width="full" position="absolute" zIndex="3" height="265px">
      <Box margin="0 98px" width="140px" overflow="scroll" borderRight="1px solid white">
        <VStack color="white" spacing="3" fontSize="xm" align="start">
          {list.map((item) => (
            <Text fontWeight={item.isSelected ? '800' : '300'}>{item.name}</Text>
          ))}
        </VStack>
      </Box>
      <ImageBox isSelected name="국내산 양파" price="3,000" weight="400g" num="1봉" />
      <Flex overflowY="scroll" width="full" marginLeft="132px">
        {list.map((item) => (
          <ImageBox
            name={item.name}
            price={item.price}
            weight={item.weight}
            num={item.num}
          />
        ))}
      </Flex>
    </Flex>
    <Box position="absolute" background="#2699fb" bottom="0" width="full" height="265px" opacity="0.8" />
    <Box position="absolute" bottom="0" zIndex="4" width="xs" right="0" height="265px" backgroundImage="linear-gradient(to right, rgba(241, 249, 255, 0), #2699fb 89%)" />
  </>
);

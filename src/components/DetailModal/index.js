import React from 'react';
import {
  Flex, Text, Box,
} from '@chakra-ui/core';
import ImageBox from '../ImageBox';
import theme from '../../themes';

const list = [
  {
    key: 1, name: '양파', price: '3,000', weight: '100g', num: '3개', isSelected: true,
  }, {
    key: 2, name: '브로콜리', price: '3,000', weight: '100g', num: '3개',
  }, {
    key: 3, name: '고구마', price: '3,000', weight: '100g', num: '3개',
  }, {
    key: 4, name: '양상추', price: '3,000', weight: '100g', num: '3개',
  }, {
    key: 5, name: '잠온다', price: '3,000', weight: '100g', num: '3개',
  }, {
    key: 6, name: '일하기시러', price: '3,000', weight: '100g', num: '3개',
  }, {
    key: 7, name: '노는게', price: '3,000', weight: '100g', num: '3개',
  }, {
    key: 8, name: '제일조아', price: '3,000', weight: '100g', num: '3개',
  },
];

export default () => (
  <>
    <Box pl="70px" bottom="0" w="full" position="absolute" zIndex="3" h="418px">
      <Flex alignItems="center" mt="41px">
        <Text fontSize="24px" color={theme.colors.black}>방울토마토</Text>
        <Text ml="15px" fontSize="18px" color="#aaaaaa">세부 상품을 선택하고 수량 변경이 가능해요</Text>
      </Flex>
      <Flex mt="36px">
        <ImageBox isSelected name="국내산 양파" price="3,000" weight="400g" num="1봉" />
        <Flex overflowY="scroll" width="full" marginLeft="132px">
          {list.map((item) => (
            <ImageBox
              key={item.key}
              name={item.name}
              price={item.price}
              weight={item.weight}
              num={item.num}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
    <Box borderTopRadius="30px" position="absolute" zIndex="2" bg="white" bottom="0" w="full" h="418px" boxShadow="0 -8px 40px 0 rgba(0, 0, 0, 0.25)" />
  </>
);

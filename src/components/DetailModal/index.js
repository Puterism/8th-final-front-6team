import React from 'react';
import {
  Flex, Text, Box,
} from '@chakra-ui/core';
import ImageBox from '../ImageBox';
import theme from '../../themes';
import { CloseBtn } from '../../assets';

const list = [
  {
    key: 1, name: '미국산 양파', price: '3,000', weight: '100g', num: 3, isSelected: true,
  }, {
    key: 2, name: '중국산 양파', price: '3,000', weight: '100g', num: 3,
  }, {
    key: 3, name: '필란드산 양파', price: '3,000', weight: '100g', num: 3,
  }, {
    key: 4, name: '멕시코산 양파', price: '3,000', weight: '100g', num: 3,
  }, {
    key: 5, name: '일본산 양파', price: '3,000', weight: '100g', num: 3,
  },
];

export default ({ closeModal }) => (
  <Flex w="full" h="full" bgColor="rgba(32, 32, 32, 0.3)" alignItems="flex-end" position="absolute" zIndex="3">
    <Box pl="70px" b="0" w="full" position="absolute" zIndex="3" h="418px">
      <Flex alignItems="center" mt="41px">
        <Text fontSize="24px" color={theme.colors.black}>방울토마토</Text>
        <Text ml="15px" fontSize="18px" color="#aaaaaa">세부 상품을 선택하고 수량 변경이 가능해요</Text>
        <CloseBtn onClick={closeModal} style={{ marginLeft: 'auto', marginRight: '69px', cursor: 'pointer' }} />
      </Flex>
      <Flex mt="36px">
        <ImageBox isSelected name="국내산 양파" price="3,000" weight="400g" num={2} />
        <Flex overflowY="scroll" w="full" ml="100px" pr="30px">
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
    <Box borderTopRadius="30px" position="absolute" zIndex="2" bg="white" b="0" w="full" h="418px" boxShadow="0 -8px 40px 0 rgba(0, 0, 0, 0.25)" />
  </Flex>
);

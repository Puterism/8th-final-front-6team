import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/core';
import theme from '../../themes';
import { Coupang, Emart, Kurly, SearchIcon } from '../../assets';

const SelectedList = ({ item, setSelectedVegi, keyword }) => {
  const hoverStyle = { bg: theme.colors.subGray };
  return (
    <Box
      _hover={hoverStyle}
      borderRadius="10px"
      cursor="pointer"
      display="flex"
      flexDir="column"
      fontSize="18px"
      m="10px 0"
      p="8px 14px"
      color={theme.colors.black}
      onClick={() => setSelectedVegi(item)}
    >
      <Flex flexDir="row">
        <SearchIcon />
        <Flex flexDir="column" ml="6px" w="full">
          <Flex>
            <Text>{keyword}</Text>
          </Flex>
          <Flex alignItems="center">
            <Text fontSize="12px" color="#cccccc">
              {item.product.name.slice(0, 18)}
            </Text>
            <Text ml="auto" textAlign="end" fontSize="15px" color="#aaaaaa">
              {item.product.price}원{' / '}
              {item.product.amount} {item.product.num}개
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ({ market, isSelected, setSelectedVegi }) => (
  <Box
    border="solid 2px"
    borderColor={isSelected ? theme.colors.green : theme.colors.subGray}
    w="387px"
    h="482px"
    color={theme.colors.black}
    display="flex"
    flexDir="column"
    alignItems="center"
    borderRadius="30px"
    p="16px"
  >
    <Box w="100%" h="134px" bg={isSelected ? theme.colors.lightGreen : theme.colors.subGray} display="flex" flexDir="column" borderRadius="19px" p="14px">
      <Flex alignItems="center">
        {market.name === '이마트' && <Emart />}
        {market.name === '쿠팡' && <Coupang />}
        {market.name === '마켓컬리' && <Kurly />}
        <Text ml="4px" fontSize="16px">
          {market.name}
        </Text>
      </Flex>
      <Text textAlign="end" mt="8px" fontSize="32px" fontWeight="bold" color={isSelected ? theme.colors.green : '#cccccc'}>
        {market.totalPrice}
        <span style={{ fontSize: '17px', ml: '5px' }}>원</span>
      </Text>

      <Flex mt="auto" alignItems="center">
        <Text fontSize="14px" color={isSelected ? theme.colors.green : '#cccccc'}>
          배송료 {market.deliveryFee}원
        </Text>
        <Text fontSize="14px" ml="10px" color={isSelected ? theme.colors.green : '#cccccc'}>
          {market.freeDeliveryPrice}원 이상 무료배송
        </Text>
      </Flex>
    </Box>

    <Box mt="10px" w="full" overflowY="scroll" className="no-scrollbar">
      {market.chips.map(item => {
        return <SelectedList key={item.id} item={item} keyword={item.keyword} setSelectedVegi={setSelectedVegi} />;
      })}
    </Box>
  </Box>
);

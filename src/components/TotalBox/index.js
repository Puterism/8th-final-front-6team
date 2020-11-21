import React from 'react';
import {
  Flex, Box, Avatar, Text,
} from '@chakra-ui/core';
import theme from '../../themes';
import { SearchIcon } from '../../assets';

const SelectedList = ({
  name, price, weight, num,
}) => {
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
    >
      <Flex flexDir="row">
        <SearchIcon />
        <Flex flexDir="column" ml="6px" w="full">
          <Flex>
            <Text>{name}</Text>
          </Flex>
          <Flex alignItems="center">
            <Text fontSize="12px" color="#cccccc">무안 햇양파 국내산 신토...</Text>
            <Text ml="auto" textAlign="end" fontSize="15px" color="#aaaaaa">
              {price}
              원
              {' / '}
              {weight}
              {'  '}
              {num}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ({
  mallName, totalPrice, list, isSelected,
}) => (
  <>
    <Flex flexDir="column" w="full">
      <Box
        border="solid 2px"
        borderColor={isSelected ? theme.colors.green : theme.colors.subGray}
        maxW="387px"
        h="482px"
        color={theme.colors.black}
        display="flex"
        flexDir="column"
        alignItems="center"
        borderRadius="30px"
        p="16px"
        cursor="pointer"
      >
        <Box
          w="100%"
          h="134px"
          bg={isSelected ? theme.colors.lightGreen : theme.colors.subGray}
          display="flex"
          flexDir="column"
          borderRadius="19px"
          p="14px"
        >
          <Flex alignItems="center">
            <Avatar
              size="xs"
              bg="white"
            />
            <Text ml="4px" fontSize="16px">{mallName}</Text>
          </Flex>
          <Text textAlign="end" mt="8px" fontSize="32px" fontWeight="bold" color={isSelected ? theme.colors.green : '#cccccc'}>
            {totalPrice}
            <span style={{ fontSize: '17px', ml: '5px' }}>원</span>
          </Text>

          <Flex mt="auto" alignItems="center">
            <Text fontSize="14px" color={isSelected ? theme.colors.green : '#cccccc'}>배송료 2,500원</Text>
            <Text fontSize="14px" ml="10px" color={isSelected ? theme.colors.green : '#cccccc'}>3만원 이상 무료배송</Text>
          </Flex>
        </Box>

        <Box
          mt="10px"
          w="full"
          overflowX="scroll"
        >
          {list.map((item) => (
            <SelectedList
              key={item.key}
              name={item.name}
              price={item.price}
              weight={item.weight}
              num={item.num}
            />
          ))}
        </Box>
      </Box>
    </Flex>
  </>
);

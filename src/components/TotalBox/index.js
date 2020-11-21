import React from 'react';
import {
  Flex, Box, Avatar, Text,
} from '@chakra-ui/core';
import theme from '../../themes';
import { SearchIcon } from '../../assets/svg';

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
      flexDirection="column"
      fontSize="18px"
      margin="10px 0"
      padding="8px 14px"
      color={theme.colors.black}
    >
      <Flex flexDirection="row">
        <SearchIcon />
        <Flex flexDirection="column" marginLeft="6px" width="full">
          <Flex>
            <Text>{name}</Text>
          </Flex>
          <Flex alignItems="center">
            <Text fontSize="12px" color="#cccccc">무안 햇양파 국내산 신토...</Text>
            <Text marginLeft="auto" textAlign="end" fontSize="15px" color="#aaaaaa">
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
    <Flex flexDirection="column" width="full">
      <Box
        border="solid 2px"
        borderColor={isSelected ? theme.colors.green : theme.colors.subGray}
        maxWidth="387px"
        height="482px"
        color={theme.colors.black}
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRadius="30px"
        padding="16px"
        cursor="pointer"
      >
        <Box
          width="100%"
          height="134px"
          bg={isSelected ? theme.colors.lightGreen : theme.colors.subGray}
          display="flex"
          flexDirection="column"
          borderRadius="19px"
          padding="14px"
        >
          <Flex alignItems="center">
            <Avatar
              size="xs"
              background="white"
            />
            <Text marginLeft="4px" fontSize="16px">{mallName}</Text>
          </Flex>
          <Text textAlign="end" marginTop="8px" fontSize="32px" fontWeight="bold" color={isSelected ? theme.colors.green : '#cccccc'}>
            {totalPrice}
            <span style={{ fontSize: '17px', marginLeft: '5px' }}>원</span>
          </Text>

          <Flex marginTop="auto" alignItems="center">
            <Text fontSize="14px" color={isSelected ? theme.colors.green : '#cccccc'}>배송료 2,500원</Text>
            <Text fontSize="14px" marginLeft="10px" color={isSelected ? theme.colors.green : '#cccccc'}>3만원 이상 무료배송</Text>
          </Flex>
        </Box>

        <div
        // onClick={controlModal}
          style={{
            marginTop: '10px', width: '100%', overflowX: 'scroll',
          }}
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
        </div>
      </Box>
    </Flex>
  </>
);

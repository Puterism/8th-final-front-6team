import React from 'react';
import { Box, Circle, Flex, Image, Text } from '@chakra-ui/core';
import theme from '../../themes';
import { Minus, Plus, Check } from '../../assets';

export default ({
  isSelected, name,
  price,
  weight,
  num,
}) => (
  <>
    <Box
      cursor="pointer"
      minW="295px"
      maxW="295px"
      h="230px"
      borderRadius="10px"
      border="solid 2px"
      borderColor={isSelected ? theme.colors.green : '#efefef'}
      mr="22px"
    >
      <Image objectFit="cover" width="295px" height="142px" borderTopRadius="8px" src="https://t1.daumcdn.net/cfile/tistory/99C9D4445BBEC6BF08" />
      <Flex p="10px" flexDir="column">
        <Text fontSize="18px" color={theme.colors.black}>
          {name}
        </Text>
        <Text fontSize="15px" color="#aaaaaa">
          {price}
          원
          <span style={{ color: 'rgba(170, 170, 170, 0.2)' }}>{' | '}</span>
          {weight}
        </Text>
        {isSelected && (
          <Flex ml="auto" alignItems="center" mt="-16px">
            <Circle border="solid 1px #cccccc" p="3px"><Minus /></Circle>
            <Text fontSize="20px" fontWeight="bold" color={theme.colors.green} mx="6px">{num}</Text>
            <Circle border="solid 1px #cccccc" p="3px"><Plus /></Circle>
          </Flex>
        )}
      </Flex>
      {isSelected && <Circle bg={theme.colors.green} mt="-240px" ml="250px" p="10px" position="absolute" zIndex="3"><Check /></Circle>}
    </Box>
  </>
);

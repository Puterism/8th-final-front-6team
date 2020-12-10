import React, { useState } from 'react';
import { Box, Circle, Flex, Image, Text } from '@chakra-ui/core';
import theme from '../../themes';
import { Minus, Plus, Check } from '../../assets';

export default ({ changeItem, isSelected, item }) => {
  const [number, setNumber] = useState(item.num);

  const changeNum = (item, num) => {
    if (num === 1) {
      changeItem(item, num);
      setNumber(number + 1);
    } else if (num === -1 && number > 1) {
      setNumber(number - 1);
      changeItem(item, num);
    }
  };

  return (
    <>
      <Box cursor="pointer" minW="295px" maxW="295px" h="230px" borderRadius="10px" border="solid 2px" borderColor={isSelected ? theme.colors.green : '#efefef'} mr="22px">
        <Image objectFit="cover" width="295px" height="142px" borderTopRadius="8px" src={item.imageUrl} />
        <Flex p="10px" flexDir="column">
          <Text fontSize="18px" color={theme.colors.black}>
            {item.name.slice(0, 15)}
          </Text>
          <Text fontSize="15px" color="#aaaaaa">
            {item.price}원<span style={{ color: 'rgba(170, 170, 170, 0.2)' }}>{' | '}</span>
            {item.amount}
          </Text>
          {isSelected && (
            <Flex ml="auto" alignItems="center" mt="-16px">
              <Circle border="solid 1px #cccccc" p="3px" onClick={() => changeNum(item, -1)}>
                <Minus />
              </Circle>
              <Text fontSize="20px" fontWeight="bold" color={theme.colors.green} mx="6px">
                {number}
              </Text>
              <Circle border="solid 1px #cccccc" p="3px" onClick={() => changeNum(item, 1)}>
                <Plus />
              </Circle>
            </Flex>
          )}
        </Flex>
        {isSelected && (
          <Circle bg={theme.colors.green} mt="-240px" ml="250px" p="10px" position="absolute" zIndex="3">
            <Check />
          </Circle>
        )}
      </Box>
    </>
  );
};

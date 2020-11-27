import { Flex } from '@chakra-ui/core';
import React from 'react';
import { RemoveBtn } from '../../assets';
import theme from '../../themes';

export default ({ text, removeable, onClick }) => (
  <Flex
    onClick={onClick}
    overflowY="visible"
    mr="2"
    fontSize="14px"
    bg={theme.colors.lightGreen}
    color={theme.colors.green}
    borderColor={theme.colors.green}
    border="solid 1px"
    borderRadius="100px"
    p="5px 13px"
    fontWeight="bold"
    alignItems="center"
    cursor={!removeable && 'pointer'}
    wordBreak="keep-all"
  >
    {text}
    {removeable
      && <span style={{ marginLeft: '7px', marginTop: '3px', cursor: 'pointer' }}><RemoveBtn /></span>}
  </Flex>
);

import { Box } from '@chakra-ui/core';
import React from 'react';
import theme from '../../themes';

export default ({ text, removeable }) => (
  <Box
    mr="2"
    fontSize="14px"
    bg={theme.colors.lightGreen}
    color={theme.colors.green}
    borderColor={theme.colors.green}
    border="solid 1px"
    borderRadius="100px"
    p="5px 13px"
    fontWeight="bold"
    cursor={!removeable && 'pointer'}
  >
    {text}
    {removeable && <span style={{ cursor: 'pointer' }}>{'  X'}</span>}
  </Box>
);

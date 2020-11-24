import { Box, Text, HStack } from '@chakra-ui/core';
import { CloseIcon } from '@chakra-ui/icons';
import React from 'react';
import theme from '../../themes';

export default ({ text, removable, onClick }) => (
  <HStack
    mr="2"
    fontSize="14px"
    bg={theme.colors.lightGreen}
    color={theme.colors.green}
    borderColor={theme.colors.green}
    border="solid 1px"
    borderRadius="100px"
    p="5px 13px"
    fontWeight="bold"
    cursor={!removable && 'pointer'}
  >
    <Text as="span">{text}</Text>
    {removable && (
      <Box as="span" cursor="pointer" onClick={() => onClick(text)}>
        <CloseIcon width="10px" height="10px" mt="-2px" />
      </Box>
    )}
  </HStack>
);

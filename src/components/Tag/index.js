import { Box } from '@chakra-ui/core';
import React from 'react';

export default ({ text }) => (
  <Box as="button" marginRight="2" fontSize="12px" bg="#f1f9ff" color="#2699fb" border="solid 3px #bce0fd" borderRadius="4px" padding="3px 13px">{text}</Box>
);

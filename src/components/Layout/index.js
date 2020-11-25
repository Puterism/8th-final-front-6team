import React from 'react';
import { Flex } from '@chakra-ui/core';
import Header from '../Header';

const Layout = (props) => {
  const { children, bgColor } = props;

  return (
    <Flex direction="column">
      <Header />
      <Flex direction="column" align="center" h="full" w="full">{children}</Flex>
    </Flex>
  );
};

export default Layout;

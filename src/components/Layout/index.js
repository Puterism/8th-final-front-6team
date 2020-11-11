import React from 'react';
import {
  Flex, Grid, GridItem,
} from '@chakra-ui/core';
import Sidebar from '../Sidebar';

const Layout = (props) => {
  const { children } = props;

  return (
    <Grid templateColumns="repeat(5, 1fr)" h="full">
      <GridItem colSpan="1">
        <Sidebar />
      </GridItem>
      <GridItem colSpan="3">
        <Flex direction="column" justify="center" align="center" h="full" w="full">{children}</Flex>
      </GridItem>
      <GridItem colSpan="1" />
    </Grid>
  );
};

export default Layout;

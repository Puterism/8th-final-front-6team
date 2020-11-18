import React from 'react';
import {
  Flex, Grid, GridItem,
} from '@chakra-ui/core';
import Sidebar from '../Sidebar';

const Layout = (props) => {
  const { children, backgroundColor } = props;

  return (
    <Grid templateColumns="repeat(8, 1fr)" h="full" backgroundColor={backgroundColor}>
      <GridItem colSpan="1">
        <Sidebar />
      </GridItem>
      <GridItem colSpan="6">
        <Flex direction="column" justify="center" align="center" h="full" w="full">{children}</Flex>
      </GridItem>
      <GridItem colSpan="1" />
    </Grid>
  );
};

export default Layout;

import { Flex, Heading, Box } from '@chakra-ui/core';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import Layout from '../../components/Layout';

const MainPage = () => (
  <Layout>
    <Flex direction="column" mt="310px" w="full" align="center" maxW="950px">
      <Heading color="main.500" fontSize="7xl">avocado</Heading>
      <Box mt="76px" w="full">
        <SearchBar mt="76px" />
      </Box>
    </Flex>
  </Layout>
);

export default MainPage;

import { Heading, Box } from '@chakra-ui/core';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import Layout from '../../components/Layout';

const MainPage = () => (
  <Layout>
    <Heading color="main.500">Avocado</Heading>
    <Box mt="76px" w="full">
      <SearchBar mt="76px" />
    </Box>
  </Layout>
);

export default MainPage;

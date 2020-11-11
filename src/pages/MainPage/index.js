import { Heading, Box } from '@chakra-ui/core';
import React from 'react';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar';

const MainPage = () => (
  <Layout>
    <Heading color="main">Avocado</Heading>
    <Box mt="76px" w="full">
      <SearchBar mt="76px" />
    </Box>
  </Layout>
);

export default MainPage;

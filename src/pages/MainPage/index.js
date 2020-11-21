import { Heading, Box } from '@chakra-ui/core';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import Layout from '../../components/Layout';

const MainPage = () => (
  <Layout>
    <Heading color="main.500">Avocado</Heading>
    <Box mt="76px" w="full">
      <SearchBar mt="76px" placeholder="구입할 채소를 검색해주세요. 최저가 조합의 커머스를 알려드릴게요. ex) 양파 + 감자" />
    </Box>
  </Layout>
);

export default MainPage;

import { Flex, Img, Heading, Box } from '@chakra-ui/core';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import Layout from '../../components/Layout';
import Chip from '../../components/Chip';

const MainPage = () => (
  <Layout>
    <Flex flexDir="column" mt="180px" w="full" alignItems="center" >
      <Img src="/images/main.png" w="450px" h="220px" mx="auto" />
      <Heading color="darkGray" fontSize="40px" mt="2">
        for a smarter veggie lifestyle
      </Heading>
      <Box mt="58px" w="full" px="12rem">
        <SearchBar
          placeholder="구입할 채소를 검색해주세요. 최저가 조합의 커머스를 알려드릴게요. ex) 양파 + 감자"
        />
      </Box>
    </Flex>
  </Layout>
);

export default MainPage;

import { Box, Flex } from '@chakra-ui/core';
import React from 'react';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar';
import Tag from '../../components/Tag';
import TotalBox from '../../components/TotalBox';

const ResultPage = () => (
  <Layout>
    <Box mt="-90px" w="90%">
      <SearchBar />
      <Flex marginTop="17px">
        <Tag text="고구마" />
        <Tag text="감자" />
        <Tag text="양파" />
      </Flex>
      <Flex marginTop="20">
        <TotalBox mallName="이마트" totalPrice="12,500" list={['ㅁ', 'ㄴ', 'ㅇ']} isSelected />
        <TotalBox mallName="쿠팡" totalPrice="13,200" list="asdf" />
        <TotalBox mallName="마켓컬리" totalPrice="15,700" list="asdf" />
      </Flex>
    </Box>
  </Layout>
);

export default ResultPage;

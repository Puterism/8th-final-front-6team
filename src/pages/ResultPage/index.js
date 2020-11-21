import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import DetailModal from '../../components/DetailModal';
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar';
import Tag from '../../components/Tag';
import TotalBox from '../../components/TotalBox';
import theme from '../../themes';

const list = [
  {
    key: 1, name: '양파', price: '3,000', weight: '100g', num: '3개',
  },
  {
    key: 2, name: '브로콜리', price: '3,000', weight: '100g', num: '3개',
  },
  {
    key: 3, name: '고구마', price: '3,000', weight: '100g', num: '3개',
  },
  {
    key: 4, name: '양상추', price: '3,000', weight: '100g', num: '3개',
  },
];

const ResultPage = () => (
  <Layout bgColor={theme.colors.bgLight}>
    <Box mt="-90px" w="90%">
      <SearchBar />
      <Flex marginTop="17px">
        <Tag text="고구마" />
        <Tag text="감자" />
        <Tag text="양파" />
      </Flex>
      <Flex marginTop="20">
        <TotalBox mallName="이마트" totalPrice="12,500" list={list} isSelected />
        <TotalBox mallName="쿠팡" totalPrice="13,200" list={list} />
        <TotalBox mallName="마켓컬리" totalPrice="15,700" list={list} />
      </Flex>
    </Box>
    <DetailModal />
  </Layout>
);

export default ResultPage;

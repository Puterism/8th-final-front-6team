import React from 'react';
import { Box, Grid } from '@chakra-ui/core';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

const CategoryPage = () => (
  <Box backgroundColor="#f2f2f2">
    <Layout>
      <Grid templateColumns="repeat(3, 1fr)" gap="25px" width="100%" marginY="32" px="110px">
        <Card
          big
          title="오늘의 샐러드"
          description={'유독 샐러드가 끌리는 날이 있죠.\n집에 있는 채소에 새로운 것 몇개만 더하면 멋진 샐러드가 된다는 사실, 알고 계시나요?\navocado에서 가장 많이 검색되는 채소 조합으로 오늘은 샐러드 식사 어떠세요?'}
        />
        <Card
          title="샐러드에 베이컨 한 조각 어때요?"
          description="집에 있는 채소에 새로운 것 몇개만 더하면 멋진 샐러드가 된다는 사실, 알고 계시나요?"
        />
        <Card
          title="아보카도가 처음인가요?"
          description="집에 있는 채소에 새로운 것 몇개만 더하면 멋진 샐러드가 된다는 사실, 알고 계시나요?"
        />
        <Card
          title="특별한 날엔, 특별한 샐러드를"
          description="샐러드는 리코타 치즈 샐러드"
        />
      </Grid>
      <Box position="fixed" width="full" bottom="0" height="133.8px" backgroundImage="linear-gradient(to bottom, rgba(241, 249, 255, 0), #f1f9ff 59%)" />
    </Layout>
  </Box>
);

export default CategoryPage;

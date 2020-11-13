import React from 'react';
import { Box, Grid } from '@chakra-ui/core';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

const CategoryPage = () => (
  <Box backgroundColor="bg">
    <Layout>
      <Grid templateColumns="repeat(4, 1fr)" gap="20px" width="100%" marginY="32">
        <Card
          title="아보카도를 좋아한다면"
          description="한 줄로 적어본다면?"
        />
        <Card
          big
          title="오늘의 샐러드"
          description={'샐러드가 끌리는 날이 있죠,\n집에 있는 채소에 새로운 것들 몇개만 구입해\n멋진 샐러드 식사를 즐겨볼까요?'}
        />
        <Card
          title="샐러드에 베이컨 한 조각 어때요?"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        />
        <Card
          title="드레싱만 바꿨을 뿐인데"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        />
        <Card
          title="특별한 날엔, 특별한 샐러드를"
          description="샐러드는 리코타 치즈 샐러드"
        />
        <Card
          title="다이어트는 겨울부터 하는거죠"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        />
      </Grid>
      <Box position="fixed" width="full" bottom="0" height="133.8px" backgroundImage="linear-gradient(to bottom, rgba(241, 249, 255, 0), #f1f9ff 59%)" />
    </Layout>
  </Box>
);

export default CategoryPage;

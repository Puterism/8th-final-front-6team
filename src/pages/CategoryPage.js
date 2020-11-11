import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/core';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const CategoryPage = () => (
  <Box bgColor="#f1f9ff">
    <Grid templateColumns="repeat(8, 1fr)" h="full">
      <GridItem colSpan="1">
        <Sidebar />
      </GridItem>
      <GridItem colSpan="6">
        <Grid templateColumns="repeat(4, 280px 1fr 340px)" gap="20px" width="100%" margin="130px 0">
          <Card
            title="아보카도를 좋아한다면"
            description="한 줄로 적어본다면?"
          />
          <Card
            big
            title="오늘의 샐러드"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
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
      </GridItem>
      <GridItem colSpan="1" />
    </Grid>
    <Box position="fixed" width="full" bottom="0" height="133.8px" backgroundImage="linear-gradient(to bottom, rgba(241, 249, 255, 0), #f1f9ff 59%)" />
  </Box>
);

export default CategoryPage;
